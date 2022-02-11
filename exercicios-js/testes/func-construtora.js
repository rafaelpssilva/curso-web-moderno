function Pessoa(primeiro, ultimo, idade, olhos) {
    this.primeiroNome = primeiro
    this.ultimoNome = ultimo
    this.idade = idade 
    this.corDosOlhos = olhos
    this.nacionalidade = "Brasil"
}

Pessoa.prototype.getNomeInteiro = function () {
    return this.primeiroNome + " " + this.ultimoNome
}


let rafael = new Pessoa("Rafael", "Silva", 16, "Castanhos")
console.log(rafael)
console.log(rafael.getNomeInteiro())



function Loja(quantidade, preco, nomeProduto) {
    this.nomeProduto = nomeProduto
    this.quantidade = quantidade
    this.preco = preco
}

Loja.prototype.valorBruto = function() {
    return `Valor bruto de ${this.nomeProduto} é de R$${this.quantidade * this.preco}`
}

const caneta = new Loja(10, 2, "Caneta")
console.log(caneta.valorBruto())
