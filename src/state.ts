import { createInterface, Interface} from "readline";
import { getCommands } from "./command_registry.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => void;
};

export type State = {
    readLine: Interface,
    cmdRegistry: Record<string, CLICommand>,
};

export function initState(): State{
    const newState: State = {
        readLine: createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "Pokedex > ",
        }),
        cmdRegistry: getCommands(),
    }
    return newState;
}