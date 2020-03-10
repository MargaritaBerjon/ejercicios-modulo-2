let boton = document.querySelector('.botoncito_1');
let boton2 = document.querySelector('.botoncito_2');

function clases(event) {
  let botonSelected = event.currentTarget;
  botonSelected.classList.toggle('clase1');
}

boton.addEventListener('click', clases);
boton2.addEventListener('click', clases);
