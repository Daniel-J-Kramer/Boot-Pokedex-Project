import { CLICommand } from "./state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapB } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";



export function getCommands(): Record<string, CLICommand> {
    return {
        catch: {
            name: "catch",
            description: "Throws a PokeBall at a pokemon. Success not guarunteed",
            callback: commandCatch,
        },
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit,
        },
        explore: {
            name: "explore",
            description: "Shows a list of the Pokemon you can encounter in the area",
            callback: commandExplore,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        inspect: {
            name: "inspect",
            description: "Displays the stats of your pokemon",
            callback: commandInspect,
        },
        map: {
            name: "map",
            description: "Displays 20 location areas from the Pokemon world",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays the last 20 location areas from the Pokemon world",
            callback: commandMapB,
        },
        pokedex: {
            name: "pokedex",
            description: "Displays all the pokemon you have caught",
            callback: commandPokedex,
        },
    };
}

