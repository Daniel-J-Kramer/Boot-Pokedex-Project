import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";

describe.each([
    {
        input: " hello world ",
        expected: ["hello", "world"],
    },
    {
        input: "pichu charmander bulbasaur",
        expected: ["pichu", "charmander", "bulbasaur"],
    },
    {
        input: "VeNuSaUr",
        expected: ["venusaur"],
    },
    // TODO: More test cases here
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        let actual = cleanInput(input)

        // The `expect` and `toHaveLength` functions are from vitest
        // they will fail the test if the condiiton is not met
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            // Likewist, the `toBe` function will fail the test if the values are not equal
            expect(actual[i]).toBe(expected[i]);
        }
    });
});