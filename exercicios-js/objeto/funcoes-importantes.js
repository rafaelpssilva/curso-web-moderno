const pessoa = { 
    nome: 'Rebeca',
    idade: 12,
    peso: 13
}

console.log(Object.keys(pessoa)) // Object.keys() retorna as chaves do objeto
console.log(Object.values(pessoa)) // Object.values() retorna o valores de cada chave do objeto
console.log(Object.entries(pessoa)) // retorna um array que dentro de um array para cada chave e valor

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)


Object.freeze(obj) 
obj.c = 1234

