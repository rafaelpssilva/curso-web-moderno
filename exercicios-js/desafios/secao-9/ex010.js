/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++" */

const simboloMais = numero => { 
    let stringRetorno = ""
    for (c = 0; c < numero; c++) {
        stringRetorno = stringRetorno.concat('+')
    }
    return stringRetorno
}

console.log(simboloMais(4))