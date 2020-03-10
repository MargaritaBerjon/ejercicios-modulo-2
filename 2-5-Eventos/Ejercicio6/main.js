let input = document.querySelector('input');
let body = document.querySelector('p');

function text(event) {
  body.innerHTML = event.currentTarget.value;
}

input.addEventListener('keydown', text);
