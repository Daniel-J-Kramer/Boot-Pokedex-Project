import { State } from "./state.js";
import { PokeAPI, ShallowLocations, Location } from "./pokeapi.js";

export async function commandMap(state: State): Promise<void> {

    const results = await state.pokeAPI.fetchLocations(state.nextLocationsURL);
    state.nextLocationsURL = results.next;
    state.prevLocationsURL = results.previous;

    for (let loc of results.results) {
        console.log(loc.name);
    }
}