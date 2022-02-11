function CriarPessoa(nome) {
    this.nome = nome
}

CriarPessoa.prototype.falar = function () {
    return console.log(`Meu nome é ${this.nome}`)
}

const p1 = new CriarPessoa('João')
p1.falar()