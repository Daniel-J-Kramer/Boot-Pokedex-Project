import { State } from "./state.js";

export async function commandHelp(state: State): Promise<void> {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:");
    console.log("");
    const cmdList = state.cmdRegistry;
    for (let cmd in cmdList) {
        let print = state.cmdRegistry[cmd];
        console.log(`${print.name}: ${print.description}`);
    }
}