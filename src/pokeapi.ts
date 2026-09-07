import { Cache } from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    cache: Cache = new Cache(1000 * 60);
    constructor() {}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        let url = "";
        if (pageURL == PokeAPI.baseURL) {
            url = `${pageURL}/location-area/`;
        } else if (pageURL == undefined) {
            url = `${PokeAPI.baseURL}/location-area/`;
        } else {
            url = pageURL;
        }
        
        const cachedResponse: ShallowLocations | undefined = this.cache.get<ShallowLocations>(url);
        if (cachedResponse != undefined) {
            return cachedResponse;
        } else {
            try {
                
                const response = await fetch(url, {
                    method: "GET",
                    mode: "cors",
                })
                if (!response.ok) {
                    throw new Error("Error getting locations");
                }
                const result = await response.json();
                this.cache.add(url, result);
                return result;
            } catch (error) {
                throw new Error("Locations not found", error as Error);
            }
        }
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const cachedResponse: Location | undefined = this.cache.get<Location>(url);
        if (cachedResponse != undefined) {
            return cachedResponse;
        } else {
            try {
                const response = await fetch(url, {
                    method: "GET",
                    mode: "cors",
                })
                if (!response.ok) {
                    throw new Error("Error getting location");
                }
                const result = await response.json();
                this.cache.add(url, result);
                return await result;
            } catch (error) {
                throw new Error("Location not found", error as Error);
            }
        }
    }
}

export type ShallowLocations = {
    count: number,
    next: string,
    previous: string,
    results: {
        name: string,
        url: string,
    }[],
};

export type Location = {
    id: number,
    name: string,
    game_index: number,
    encounter_method_rates: JSON,
    location: JSON,
    names: JSON,
    pokemon_encounters: JSON,
};