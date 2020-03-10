let name = document.querySelector('.name');

let button = document.querySelector('button');

function myName() {
  console.log('Hola ' + name.value);
}

button.addEventListener('click', myName);
