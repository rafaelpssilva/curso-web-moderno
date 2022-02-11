/* 
Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
Exemplos:
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
*/ 

const removerVogais = frase => {
    for (i in frase) {
        if (frase[i] != 'a' && frase[i] != 'e' && frase[i] != 'i' && frase[i] != 'o' && frase[i] != 'u') {
            console.log(frase[i])
        }
    }
}

const removerVogais2 = frase => {
    let newFrase = []
    for (i in frase) {
        if (frase[i] != 'a' && frase) {
            newFrase.push(frase[i])
        }
    }
    return newFrase 
}

let oo = 'Abacate'
console.log(removerVogais2(oo))

