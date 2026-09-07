import { State } from "./state.js";


export async function commandInspect(state: State, pokemon: string) {
    const pokemonStats = state.pokeDex[pokemon];
    if (pokemonStats == undefined) {
        console.log("you have not caught that pokemon");
    } else {
        console.log(`Name: ${pokemonStats.name}`);
        console.log(`Height: ${pokemonStats.height}`);
        console.log(`Weight: ${pokemonStats.weight}`);
        console.log(`Stats:`);
        for (let st in pokemonStats.stats){
            console.log(`   -${pokemonStats.stats[st].stat.name}: ${pokemonStats.stats[st].base_stat}`);
        }
        console.log(`Types:`);
        for (let tp in pokemonStats.types){
            console.log(`   -${pokemonStats.types[tp].type.name}`);
        }
    }
}