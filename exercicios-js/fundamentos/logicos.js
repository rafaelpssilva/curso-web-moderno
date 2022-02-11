function compras(trabalho1, trabalho2) { 
    const comprar_sorvete = trabalho1 || trabalho2;
    const comprar_tv_50 = trabalho1 && trabalho2;
    const comprar_tv_32 = trabalho1 != trabalho2;
    const manter_saudavel = !comprar_sorvete;

    return { comprar_sorvete, comprar_tv_50, comprar_tv_32, manter_saudavel };
};

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
