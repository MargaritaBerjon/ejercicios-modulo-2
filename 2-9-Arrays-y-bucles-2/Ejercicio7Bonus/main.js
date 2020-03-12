let lineas = 5;
let arbol = '▲';
let star = '★';
let tronco = '|';

console.log(star);

for (let linea = 1; linea <= lineas; linea++) {
  console.log(arbol.repeat(linea));
}

console.log(tronco);
