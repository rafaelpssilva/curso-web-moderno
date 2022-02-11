// Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function banco(valor) {
    const valorOriginal = valor
    let c100 = 0
    let c50 = 0 
    let c10 = 0
    let c5 = 0
    let c1 = 0

    if (valor >= 100) {
        for (; valor >= 100; c100++) {
            valor -= 100
        }
    }
    if (valor >= 50 && valor <= 99) {
        for(; valor >= 50 && valor <= 99; c50++) {
            valor -= 50
        }
    }
    if (valor >= 10 && valor <= 49) {
        for (; valor >=10 && valor <= 49; c10++) {
            valor -= 10
        }
    }
    if (valor >= 5 && valor <= 9) {
        for (; valor >= 5 && valor <= 9; c5++) {
            valor -= 5
        }
    }
    if (valor >= 1 && valor <= 4) {
        for (; valor >= 1 && valor <= 9; c1++) {
            valor -= 1
        }
    }

    imprimirResultado(c1, c5, c10, c50, c100, valor, valorOriginal)
}

function imprimirResultado(c1, c5, c10, c50, c100, valor, valorOriginal) {
    console.log(`==================
    R$${valorOriginal.toFixed(2)}`)
    if (c100 > 0) {
        console.log(`Notas de R$100.00 = ${c100}`)
    }
    if (c50 > 0 ) {
        console.log(`Notas de R$50.00 = ${c50}`)
    }
    if (c10 > 0) {
        console.log(`Notas de R$10.00 = ${c10}`)
    }
    if (c5 > 0) {
        console.log(`Motas de R$5.00 = ${c5}`)
    }
    if (c1 > 0) {
        console.log(`Notas de R$1.00 = ${c1}`)
    }
    if (valor < 1) {
        console.log(`${valor} sobra`)
    }
    console.log('==================')
}


banco(153)