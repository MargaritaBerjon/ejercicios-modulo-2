let text = document.querySelector('p');
let button = document.querySelector('.boton');

function oleYo() {
  text.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
}

button.addEventListener('click', oleYo);
