import { getCommands } from "./command_registry.js";

export function commandHelp() {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:");
    console.log("");
    const cmdList = getCommands();
    for (let cmd in cmdList) {
        let print = getCommands()[cmd];
        console.log(`${print.name}: ${print.description}`);
    }
}