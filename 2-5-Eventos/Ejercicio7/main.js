let boton = document.querySelector('.botoncito');

function clases(event) {
  boton.classList.toggle('clase1');
}

boton.addEventListener('click', clases);
