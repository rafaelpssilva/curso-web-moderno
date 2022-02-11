/* Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo)
e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo.
Quando o parâmetro inclusivo for true, tenha "entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.
Exemplos:
estaEntre(10, 100, 50) // retornará true
estaEntre(16, 100, 160) // retornará false
estaEntre(3, 150, 3) // retornará false
estaEntre(3, 150, 3, true) // retornará true */

function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (minimo > maximo) {
        [maximo, minimo] = [minimo, maximo]
    }

    if (inclusivo === false) {
        if (numero > minimo && numero < maximo) {
            return true
        } else {
            return false
        }
    } else {
        if (numero >= minimo && numero <= maximo) {
            return true
        } else { 
            return false
        }
    }
}

console.log(estaEntre(1, 10, 1, false))

// ou 

const estaEntre2 = (minimo, maximo, inclusivo = false) => {
    if (inclusivo) {
        return numero >= minimo && numero <= maximo
    }

    return numero > minimo && numero < maximo 
}


// ou 

const estaEntre3 = (minimo, maximo, inclusivo = false) => inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
