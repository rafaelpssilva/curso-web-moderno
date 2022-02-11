let valor;
console.log(valor);

valor = null; // ausência de valor 
console.log(valor);
// console.log(valor.toString()) // Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evite atribuit undefined
console.log(!!produto.preco);
console.log(produto);

produto.preco = null;
console.log(!!produto.preco);
console.log(produto);
