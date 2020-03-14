let input = document.querySelector('.js-input');
let name = document.querySelector('.js-name');

function writeName(ev) {
  name.innerHTML = ev.target.value;
  localStorage.setItem('names', input.value);
}

input.addEventListener('keyup', writeName);
name.innerHTML = localStorage.getItem('names');
input.value = localStorage.getItem('names');
