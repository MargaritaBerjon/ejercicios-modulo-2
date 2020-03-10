// const adalaber = {};
// adalaber.name = 'María';
// adalaber.speak = phrase => `Yo digo: ${phrase}`;

// // Muestra en la consola 'Yo digo: Hola'
// console.log(adalaber.speak('Hola'));

let cestaPeras = {};
cestaPeras.max = 20;
cestaPeras.min = 1;
cestaPeras.inicial = 0;
cestaPeras.actual = cestaPeras.inicial;
cestaPeras.add = function add() {
  cestaPeras.actual += 1;
};
cestaPeras.remove = function remove() {
  cestaPeras.actual -= 1;
};
cestaPeras.reset = function reset() {
  cestaPeras.actual = cestaPeras.inicial;
};

console.log(cestaPeras.actual);
cestaPeras.add();
