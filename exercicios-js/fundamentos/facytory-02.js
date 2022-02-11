// criar funcao facytory passando nome e preco e criar objeto usando os parametros, e colocar desconto com valor fixo

function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 3500.00))
console.log(criarProduto('Headset', 500.00))
