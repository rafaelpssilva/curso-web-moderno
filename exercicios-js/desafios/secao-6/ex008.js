// Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2  pontuação3 etc..”,
// escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo)

function recorde(jogos) {
    let recordePontuacao = 0
    let maiorPontuacao = jogos[0]
    let jogoMaiorPontacao = jogos[0]
    for (i in jogos) {
        if (maiorPontuacao < jogos[i]) {
            maiorPontuacao = jogos[i]
            jogoMaiorPontacao = [i]
            recordePontuacao += 1
        }
    }
    console.log(`O recorde foi batido: ${recordePontuacao} veze(s)\nA maior pontuação foi: ${maiorPontuacao} pontos no jogo ${jogoMaiorPontacao}`)

    piorJogo(jogos)
}


function piorJogo(jogos) {
    let piorPontuacao = jogos[0]
    let jogoPiorPontuacao = jogos[0]

    for (i in jogos) {
        if (piorPontuacao > jogos[i]) {
            piorPontuacao = jogos[i]
            jogoPiorPontuacao = [i]
        }
    }
    console.log(`A pior pontuação foi: ${piorPontuacao} pontos no jogo ${jogoPiorPontuacao}`)
}

recorde([30, 40, 20, 4, 51, 25, 42, 38, 56, 0])