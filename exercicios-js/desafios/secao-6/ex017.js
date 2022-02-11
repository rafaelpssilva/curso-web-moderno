// Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.


function calcularReajuste(planoDeAumento, salarioAtual) {
    switch (planoDeAumento) {
        case 'a':
            const aumento10 = salarioAtual * (1 + 0.10)
            console.log(aumento10.toFixed(2))
            break
        case 'b':
            const aumento15 = salarioAtual * (1 + 0.15)
            console.log(aumento15.toFixed(2))
            break
        case 'c':
            const aumento20 = salarioAtual * (1 + 0.20)
            console.log(aumento20.toFixed(2))
            break
        default:
            console.log('Plano inválido')
    }
}

calcularReajuste('a', 1000)
calcularReajuste('b', 1000)
calcularReajuste('c', 1000)
calcularReajuste('d', 1000)