// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

let numeros = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]
let maior = numeros[0]
let menor = numeros[0]

for (i in numeros) {
    if (numeros[i] > maior) {
        maior = numeros[i]
    }
    if (numeros[i] < menor) {
        menor = numeros[i]
    }
}

console.log(maior)
console.log(menor)