function imprimir_soma(a, b) {
    console.log(a + b)
};

imprimir_soma(2, 3);
imprimir_soma(2);
imprimir_soma(2, 10, 4, 5, 6)
imprimir_soma();

// função com retorno

function soma(a, b = 0) {
    return a + b
}; 

console.log(soma(2, 3));
console.log(soma(2))
