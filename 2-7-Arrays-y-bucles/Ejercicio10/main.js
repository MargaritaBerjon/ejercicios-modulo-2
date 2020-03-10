// Escribid un script que recorra los datos de este array y pinte en consola por cada elemento: "El dato VALOR está en la posición X y es de tipo TIPO".
// Por ejemplo "El dato Ada está en la posición 0 y es de tipo string".

const items = [
  'Ada',
  1815,
  ['Informática', 'Matemática', 'Escritora'],
  {
    mother: 'Anna Isabella',
    father: 'Lord Byron'
  }
];

for (const i in items) {
  console.log('El dato ' + items[i] + ' está en la posición ' + i + ' y es de tipo ' + typeof items[i]);
}
