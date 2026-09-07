import { State } from "./state.js";
import { PokeAPI, ShallowLocations, Location } from "./pokeapi.js";

export async function commandMapB(state: State): Promise<void> {
    
    const results = await state.pokeAPI.fetchLocations(state.prevLocationsURL);
    if (!state.prevLocationsURL) {
        throw new Error("you're on the first page");
    }
    state.nextLocationsURL = results.next;
    state.prevLocationsURL = results.previous;

    for (let loc of results.results) {
        console.log(loc.name);
    }
}