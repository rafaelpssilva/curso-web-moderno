/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 
0,0 a 4,9 seja atribuído o conceito D, 
de 5,0 a 6,9 seja atribuído o conceito C,
de 7,0 a 8,9 o conceito B 
9,0 a 10,0 o conceito A */


function leitorDeNotas(notas) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 9 && notas[i] <= 10) {
            console.log(`Índicie: ${i}\nNota: ${notas[i]}\nConceito: A\n`)
        }
        else if (notas[i] >= 7 && notas[i] < 9) {
            console.log(`Índicie: ${i}\nNota: ${notas[i]}\nConceito: B\n`)
        }
        else if (notas[i] >= 5 && notas[i] < 7) {
            console.log(`Índicie: ${i}\nNota: ${notas[i]}\nConceito: C\n`)
        }
        else if (notas[i] >=0 && notas[i] < 5) {
            console.log(`Índicie: ${i}\nNota: ${notas[i]}\nConceito: D\n`)
        }
        else {
            console.log('ERRO! Nota inválida.\n')
        }
    }
}

leitorDeNotas([10, 13, 9, 8.2, 2.5, 7.7, 6.8])