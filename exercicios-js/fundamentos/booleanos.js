let is_ativo = false;
console.log(is_ativo);

is_ativo = true;
console.log(is_ativo);

is_ativo = 1;
console.log(!!is_ativo);

console.log('Os verdadeiros');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!(is_ativo = true));

console.log("OS falsos...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(is_ativo = false));

console.log("Pra finalizar...");
console.log(!!("" || null || 0 || " "));

let nome = "Rafael";
console.log(nome || "Desconehcido");



