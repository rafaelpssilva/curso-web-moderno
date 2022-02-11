/* Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplos:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará false */

const maiorOuIgual = (num1, num2) => {
    if (num1 > num2) {
        return true
    }
    else if (num1 < num2) {
        return false
    }
    else if (num1 === num2) {
        return true
    }
    else {
        return false
    }
}


// solução 

const maiorOuIgual2 = (primeiro, segundo) => {
    if (typeof primeiro != typeof segundo ) {
        return false
    }
    return primeiro >= segundo 
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual2(5, 1))