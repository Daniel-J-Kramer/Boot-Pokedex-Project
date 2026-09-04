import { createInterface } from "node:readline";
import { CLICommand, getCommands } from "./command_registry.js";

export function cleanInput(input: string): string[] {
    let splitStrings = input.toLowerCase().trim().split(" ");
    
    return splitStrings;
}

export function startREPL() {
    const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
    });
    rl.prompt();
    rl.on("line", (line: string) => {
        let result = cleanInput(line);
        if (result.length == 0) {
        rl.prompt()
        } else {
            let cmd: CLICommand = getCommands()[result[0]];
            try {
                cmd.callback(getCommands());
            } catch(error) {
                if (error instanceof Error) {
                    console.log(`Unknown command`);
                }
            }
            rl.prompt()
        }
    });
}