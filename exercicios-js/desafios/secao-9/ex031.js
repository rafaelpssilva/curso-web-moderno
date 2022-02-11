/* 
Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
Exemplos:
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6
*/

const segundoMaior = array => { 
    let maior = array[0]
    let maior2
    for (i in array) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }
    console.log(maior, maior2)
}

segundoMaior([12, 16, 1, 5])
segundoMaior([8, 4, 5, 6]) 

 