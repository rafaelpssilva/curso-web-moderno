console.log(soma(3, 4)) // a function declaration pode ser chamada acima da própia função pois o JavaScript carrega todas function declaration primeiro 

// function declaration 
function soma(x, y) {
    return x + y
}

// function expression 
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) // a chamada só funcionara se a função armazenada na constante já tenha sido declarada acima difrente da function declaration 

// name function expression, pouco usada / serve para debug
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))
