import { State } from "./state.js";
import { PokeAPI, ShallowLocations, Location } from "./pokeapi.js";

export async function commandCatch(state: State, pokemon: string) {
    console.log(`Throwing a Pokeball at ${pokemon}...`);
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    try {
        const pokeURL = await fetch(url, {
            method: "GET",
            mode: "cors",
        })
        if (!pokeURL.ok){
            throw new Error ("Pokemon name incorrect or not around");
        }
        const result = await pokeURL.json()
        const chance = Math.random();
        if (chance > result.base_experience / 1000) {
            console.log(`${pokemon} was caught!`);
            state.pokeDex[pokemon] = result;
            console.log("You may now inspect it with the inspect command.");
        } else {
            console.log(`${pokemon} escaped!`);
        }
    } catch (error) {
        throw new Error("Pokemon unavailable", error as Error);
    }
    
}