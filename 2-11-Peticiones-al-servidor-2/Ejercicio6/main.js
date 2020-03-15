let form = document.querySelector('.js-form');
let paragraph = document.querySelector('.js-data');
const inputs = document.querySelectorAll('input');
console.log(inputs);

function writeData() {
  const name = inputs[0].value;
  const surname = inputs[1].value;
  paragraph.innerHTML = name + ' ' + surname;
  localStorage.setItem('inputs', JSON.stringify({ name: name, surname: surname }));
}

if (JSON.parse(localStorage.getItem('inputs'))) {
  const fieldsLoaded = JSON.parse(localStorage.getItem('inputs'));
  paragraph.innerHTML = fieldsLoaded.name + ' ' + fieldsLoaded.surname;

  inputs[0].value = fieldsLoaded.name;
  inputs[1].value = fieldsLoaded.surname;
}

form.addEventListener('keyup', writeData);
