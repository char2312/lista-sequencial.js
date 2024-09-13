const notas = [3,5,8,10,4];
console.log(notas[0]);
console.log(notas[4]);
console.log(notas.push(9))
console.log(notas.shift(0))
console.log(notas)
notas.forEach(function(nota) {
    console.log(nota);
});
const soma = notas.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let media = soma / notas.length;

console.log(media)