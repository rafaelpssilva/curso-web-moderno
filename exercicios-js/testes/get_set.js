const pai = { nome: 'João', corCabelo: 'preto'}
const filha = Object.create(pai)
filha.nome = 'Ana'
console.log(filha.nome, filha.corCabelo)

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
  
console.log(Object.values(object1));