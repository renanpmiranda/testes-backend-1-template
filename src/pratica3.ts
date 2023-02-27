interface Pratica3 {
    soma: number,
    mult: number
}

export const pratica3 = (n1: number, n2: number): Pratica3 => {
    if (
        typeof n1 !== "number" ||
        typeof n2 !== "number"
    ) {
        throw new Error("os argumentos devem ser number")
    }

    return {
        soma: n1 + n2,
        mult: n1 * n2
    } 
}