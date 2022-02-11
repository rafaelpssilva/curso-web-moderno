/* Escreva uma função que receba dois parâmetros início e fim. 
Essa função deve imprimir todos os números ímpares que estão entre esses valores. 
Por padrão os valores devem ser 0 para início e 100 para fim. 
Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */


function imprimirImpar(inicio = 0, fim = 100) {
    if (inicio < fim) {
        for (; inicio < fim + 1; inicio++) {
            if (inicio % 2 !== 0) {
                console.log(inicio)
            }
        }
    }
    else if (inicio > fim) {
        console.log(`Ímpares em contagem regressiva de ${inicio} à ${fim}`)
        for (; inicio > fim - 1; inicio--) {
            if (inicio % 2 !== 0 ) {
                console.log(inicio)
            }
        }
    }
}

imprimirImpar(-99, 200) 
imprimirImpar(200, -200)
imprimirImpar(19, 3)