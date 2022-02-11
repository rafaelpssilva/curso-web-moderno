/* 
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
*/ 

const somarNumeros = array => array.reduce( function(acumulador, atual) { return acumulador + atual } )
console.log(somarNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))