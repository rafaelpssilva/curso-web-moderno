function get_int_aleatorio_entre(min, max) {
    const valor = Math.random() * (max - min ) + min 
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = get_int_aleatorio_entre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log("Até a próxima!")


for (let i = 0; i < 9; i++) {
    console.log(i)
}

