// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.

let numeros = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9] 
let negativos = 0

for (i in numeros) {
    if (numeros[i] < 0) {
        negativos++
    }
}

console.log(negativos)