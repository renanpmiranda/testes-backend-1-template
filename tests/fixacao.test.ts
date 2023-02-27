import { fixacao } from './../src/fixacao';

describe("fixacao", () => {
    test("deve receber uma string e retornar um array de strings onde cada item é uma letra da palavra original", () => {
        const result = fixacao("dev")

        expect(result[0]).toBe("d")
        expect(result[1]).toBe("e")
        expect(result[2]).toBe("v")
    })
})