import { createInterface, Interface} from "readline";
import { getCommands } from "./command_registry.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export type Pokemon = {
    id: number,
    name: string,
    base_experience: number,
    height: number,
    is_default: boolean,
    order: number,
    weight: number,
    abilities: object[],
    forms: object[],
    game_indices: object[],
    held_items: object[],
    location_area_encounters: string,
    moves: object[],
    past_types: object[],
    past_abilities: object[],
    past_stats: object[],
    sprites: [],
    cries: [],
    species: string,
    stats: {
        base_stat: number,
        effort: number,
        stat: {
            name: string,
            url: string,
        };
    }[],
    types: {
        slot: number,
        type: {
            name: string,
            url: string,
        };
    }[],
}

export type State = {
    readLine: Interface,
    cmdRegistry: Record<string, CLICommand>,
    pokeAPI: PokeAPI,
    nextLocationsURL: string | undefined,
    prevLocationsURL: string | undefined,
    pokeDex: Record<string, Pokemon>,
};

export function initState(): State{
    const newState: State = {
        readLine: createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "Pokedex > ",
        }),
        cmdRegistry: getCommands(),
        pokeAPI: new PokeAPI,
        nextLocationsURL: undefined,
        prevLocationsURL: undefined,
        pokeDex: {} as Record<string, Pokemon>,
    }
    return newState;
}