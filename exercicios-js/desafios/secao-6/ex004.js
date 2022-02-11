// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores

function divisao(dividendo, divisor) {
    resultadoDaDivisao = dividendo / divisor
    resto = dividendo % divisor
    return `Divisão = ${resultadoDaDivisao.toFixed(2)}
Resto da divisão = ${resto.toFixed(1)}`
}

console.log(divisao(11, 4))
