const peso_1 = 1.0;
const peso_2 = Number("2.0");

console.log(peso_1, peso_2);
console.log(Number.isInteger(peso_1));
console.log(Number.isInteger(peso_2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso_1 + avaliacao2 * peso_2;
const media = total / (peso_1 + peso_2);

console.log(media.toFixed(4));
console.log(media.toString(2));
console.log(typeof media)
