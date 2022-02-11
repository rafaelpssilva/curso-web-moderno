// function calculadora(n1, n2) { 
//     let resultado = n1 * n2
//     imprimirResultado(resultado)
// }

// function imprimirResultado(receberSoma) {
//     console.log(receberSoma)
// }



// calculadora(2, 2)
// // imprimirResultado(numerosParaSomar)


// function myDisplayer(some) {
//     console.log(some)
// }
  
// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }
  
// myCalculator(5, 5, myDisplayer);
















function imprimirResultado(soma) {
    console.log(soma)
}

function imprimirResultado2(soma) { 
    console.log("soma = " + soma)
}

function somar(n1, n2, callback) {
    let resultado = n1 + n2
    callback(resultado)
}

somar(2, 3, imprimirResultado)
