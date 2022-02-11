// armazenado uma função em uma variável

const imprimir_soma = function(a, b) {
    console.log(a + b);
}

imprimir_soma(2, 3);

//armazenando uma função arrow em uma variável 
const soma = (a, b) => {
    return a + b
};

console.log(soma(2, 3));

// retorno implícto 
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a);
imprimir2("Legal");