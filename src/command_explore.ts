import { State } from "./state.js";
import { PokeAPI, ShallowLocations, Location } from "./pokeapi.js";

export async function commandExplore(state: State, location: string): Promise<void>{
    console.log(`Exploring ${location}...`)
    const result = await state.pokeAPI.fetchLocation(location);
    const pokemon = JSON.parse(JSON.stringify(result.pokemon_encounters));
    console.log("Found Pokemon:");
    for (let obj in pokemon) {
        console.log(` - ${pokemon[obj].pokemon.name}`)
    }
}