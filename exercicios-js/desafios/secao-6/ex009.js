// Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
// classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
// possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
// que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
// arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
// 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
// seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
// e o aluno será aprovado.

// nota < 40 reprovado 
// se a nota for < 3 (0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 95, 100)


function classifcarAluno(valor) {
    convertido = valor.toString()
    digito1 = convertido.substring(0, 1)
    digito2 = convertido.substring(1)

    if (valor <= 34) {
        return valor
    }
    else if (digito2 == 0) {
        return parseInt(digito1 + digito2)
    }
    else if(digito2 >= 1 && digito2 <= 5) {
        digito2 = 5
        return parseInt(digito1 + digito2)
    }
    else if (digito2 >= 6 && digito2 <= 9) {
        digito1 = parseInt(digito1) + 1
        digito2 = parseInt(digito2)
        digito2 = 0

        digito1 = digito1.toString()
        digito2 = digito2.toString()
        return parseInt(digito1 + digito2)
    }
}

console.log(classifcarAluno(100))
console.log(classifcarAluno(30))
console.log(classifcarAluno(38))
console.log(classifcarAluno(88))
console.log(classifcarAluno(61))
