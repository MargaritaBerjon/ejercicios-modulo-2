let parrafo = document.querySelector('p');
let parrafonuevo = 'The default interactive shell is now';

function addP() {
  parrafo += parrafonuevo.innerHTML;
}

p.addEventListener('focus', addP);
