import { CLICommand } from "./state.js"
import { State } from "./state.js"

export function cleanInput(input: string): string[] {
    let splitStrings = input.toLowerCase().trim().split(" ");
    
    return splitStrings;
}

export function startREPL(state: State) {
    
    state.readLine.prompt();
    state.readLine.on("line", (line: string) => {
        let result = cleanInput(line);
        if (result.length == 0) {
        state.readLine.prompt()
        } else {
            let cmd: CLICommand = state.cmdRegistry[result[0]];
            try {
                cmd.callback(state);
            } catch(error) {
                if (error instanceof Error) {
                    console.log(`Unknown command`);
                }
            }
            state.readLine.prompt()
    }});
}