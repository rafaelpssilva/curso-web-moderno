// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

let contagemPar = 0
let contagemImpar = 0

let arrayPar = []
let arrayImpar = []


for (let i in numeros) {
    if (numeros[i] % 2 == 0) {
        arrayPar.push(numeros[i])
        contagemPar += 1
    } else {
        arrayImpar.push(numeros[i])
        contagemImpar += 1
    }
}


console.log(`Números pares: ${arrayPar} = ${contagemPar}
Números ímpares: ${arrayImpar} = ${contagemImpar}`)

