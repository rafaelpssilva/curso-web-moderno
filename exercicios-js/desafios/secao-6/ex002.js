// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).


function tipoDoTriangulo(x = false, y = false, z = false) {
    if (x === false || y === false || z === false) {
        console.log('Não foi informado os três lados')
    }
    else if (x === y && x === z) {
        console.log('Triângulo Equilátero')
    } 
    else if (x === y && x !== z || x === z && x !== y ||
             y === x && y !== z || y === z && y !== x ||
             z === x && z !== y || z === y && z !== x) {
        console.log('Triângulo Isóceles')
    }
    else if (x !== y && x !== z && y !== z) {
        console.log('Triângulo Escaleno')
    }
}


function tipoDoTriangulo2(x = false, y = false, z = false) {
    if (x === false || y === false || z === false) {
        console.log('Não foi informado os três lados')
    }
    else if (x + y + z === x*3) {
        console.log('Triângulo Equilátero')
    }
    else if (x !== y && x !== z && y !== z) {
        console.log('Triângulo Escaleno')
    }
    else if (x + y + z !== x*3 || y*3 || z*3) {
        console.log('Triângulo Isóceles')
    }
}
