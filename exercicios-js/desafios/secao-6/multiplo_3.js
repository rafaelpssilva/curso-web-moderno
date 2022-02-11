// soma dos numeros impares multiplos de tres no intervalo de 1 a 500 

function soma(inicio, fim) {
    soma = 0 
    fim++ 
    for (; inicio < fim; inicio++) {
        if (inicio % 2 != 0 && inicio % 3 == 0) { 
            soma += inicio 
        }
    }
    console.log(soma)
}

soma(0, 500)