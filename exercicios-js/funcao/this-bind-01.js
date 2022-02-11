const pessoa = {
    suadacao: "Bom dia",
    falar() {
        console.log(this.suadacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e POO

const falar_de_pessoa = pessoa.falar.bind(pessoa)
falar_de_pessoa()

