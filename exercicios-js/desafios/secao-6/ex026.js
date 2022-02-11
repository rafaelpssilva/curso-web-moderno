// Fazer um programa para encontrar todos os pares entre 1 e 100.

for (let par = 0; par < 101; par += 2) {
    console.log(par)
}

for(let par = 1; par < 101; par++) {
    if (par % 2 == 0) {
        console.log(par)
    }
}
 

let parWhile = 0 
while (parWhile < 101) {
    if (parWhile % 2 == 0) {
        console.log(parWhile)
    }
    parWhile++
}