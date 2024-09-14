const notas = [3, 5, 8, 10, 4];

// Acessando o primeiro e o último elemento
console.log(notas[0]); // Primeira nota
console.log(notas[notas.length - 1]); // Última nota

// Adicionando uma nova nota com push()
notas.push(9);
console.log("Nota adicionada:", notas);

// Removendo a primeira nota com shift()
notas.shift();
console.log("Após remoção da primeira nota:", notas);

// Iterando sobre as notas com forEach
notas.forEach(function(nota) {
    console.log("Nota:", nota);
});

// Calculando a média das notas
const soma = notas.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let media = soma / notas.length;
console.log("Média das notas:", media);

// Filtrando as notas maiores que 7
const notasMaioresQueSete = notas.filter(nota => nota > 7);
console.log("Notas maiores que 7:", notasMaioresQueSete);

// Ordenando as notas em ordem crescente
notas.sort((a, b) => a - b);
console.log("Notas ordenadas:", notas);

// Verificando se a nota 6.5 está presente no array
const temNotaSeisPontoCinco = notas.includes(6.5);
console.log("A nota 6.5 está presente?", temNotaSeisPontoCinco);

// Encontrando o índice da nota 8.0
const indiceNotaOito = notas.indexOf(8.0);
console.log("Índice da nota 8.0:", indiceNotaOito);

// Mapeando as notas, elevando cada uma ao quadrado
const notasAoQuadrado = notas.map(nota => nota ** 2);
console.log("Notas ao quadrado:", notasAoQuadrado);
