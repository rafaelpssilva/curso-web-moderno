/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela:
1) crianças com menos de 10 anos pagam R$80;  // 180
2) conveniados com idade entre 10 e 30 anos pagam R$50;  // 150
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;  //195
4) conveniados acima de 60 anos pagam R$130  // 230  */


function precoPlanoSaude(idade) {
    const base = 100
    if (idade > 60) {
        console.log(`Preço do plano de saúde (maior que 60 anos) R$${(base + 130).toFixed(2)}`)
    }
    else if (idade > 30 && idade <= 60) {
        console.log(`Preço do plano de saúde (acima de 30 e até 60 anos) R$${(base + 95).toFixed(2)}`)
    }
    else if (idade >= 10 && idade <= 30) {
        console.log(`Preço do plano de saúde (entre 10 e 30 anos) R$${(base + 50).toFixed(2)}`)
    }
    else if (idade >= 0 && idade < 10) {
        console.log(`Preço do plano de saúde (menos que 10 anos) R$${(base + 80).toFixed(2)}`)
    }
    else {
        console.log(`Idade ínvalida`)
    }
}

precoPlanoSaude(8)
precoPlanoSaude(15)
precoPlanoSaude(35)
precoPlanoSaude(52)
precoPlanoSaude(80)
