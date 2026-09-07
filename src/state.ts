import { createInterface, Interface} from "readline";
import { getCommands } from "./command_registry.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
};

export type State = {
    readLine: Interface,
    cmdRegistry: Record<string, CLICommand>,
    pokeAPI: PokeAPI,
    nextLocationsURL: string | undefined,
    prevLocationsURL: string | undefined,
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
    }
    return newState;
}