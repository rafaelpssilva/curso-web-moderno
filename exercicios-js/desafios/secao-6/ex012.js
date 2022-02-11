// Faça um algoritmo que calcule o fatorial de um número.

function gerarFatorial(num) {
    let fatorial = 1;
    for(let i = 1; i <= num; i++){
      fatorial *= i;
    }
    return fatorial
}

console.log(gerarFatorial(10))
