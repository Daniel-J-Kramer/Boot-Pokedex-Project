import { CLICommand } from "./state.js"
import { State } from "./state.js"

export function cleanInput(input: string): string[] {
    let splitStrings = input.toLowerCase().trim().split(" ");
    
    return splitStrings;
}

export function startREPL(state: State) {
    
    state.readLine.prompt();
    state.readLine.on("line", async (line: string) => {
        let result = cleanInput(line);

        let cmd: CLICommand = state.cmdRegistry[result[0]];
        if (!cmd){
            console.log("Unknown command");
        } else {
            try {
                await cmd.callback(state, result[1]);
            } catch(error) {
                if (error instanceof Error) {
                    
                    console.log(error.message);
                }
            }
        }
        state.readLine.prompt()
    });
}