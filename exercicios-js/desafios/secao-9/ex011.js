/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16] */

function receberPrimeiroEUltimoElemento(array) {
    array.splice(1, array.length-2)
    let newArray = array
    return newArray
}

console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))

function receberPrimeiroEUltimoElemento2(array) {
    let newArray = []
    for (i in array) {
        if(i == 0 || i == array.length-1) {
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(receberPrimeiroEUltimoElemento2([1, 2, 3, 4, 5, 6]))



