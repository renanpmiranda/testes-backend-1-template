import { pratica2 } from './../src/pratica2';

describe("pratica2", () => {
    test("deve retornar true quando n for par", () => {
        const result = pratica2(10)
        expect(result).toBe(true)
    })

    test("deve retornar false quando n for ímpar", () => {
        const result = pratica2(5)
        expect(result).toBe(false)
    })
})