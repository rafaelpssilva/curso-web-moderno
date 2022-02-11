/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro.
Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro.
A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5 */

 
function calculadora1(vetorNumeros, multiplicador) {
    multiplicador = multiplicador[0]
    resultados = []
    for (i in vetorNumeros) {
        resultados.push(vetorNumeros[i] * multiplicador)
    }
    return resultados
}

function calculadora2(vetorDeNumeros, multiplicador) {
    resultados = []
    if (multiplicador[0] > 5) {
        for (i in vetorDeNumeros) {
            resultados.push(vetorDeNumeros[i] * multiplicador[0])
        }
        return resultados
    } else {
        return `ERRO! Multiplicador menor que 5. (${multiplicador[0]})`
    }
}

let numeros = [1, 2, 3, 4, 5]
let multiplicador = [5]
console.log(calculadora1(numeros, multiplicador))
console.log(calculadora2(numeros, multiplicador))
