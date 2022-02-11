// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const notas = [1, 2, 3, 4, 5] 
let soma = 0

for (i in notas) {
    soma += notas[i]
}

console.log(soma / notas.length)
