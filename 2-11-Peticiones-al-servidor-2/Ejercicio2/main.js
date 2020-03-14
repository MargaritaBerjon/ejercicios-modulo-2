'use strict';

function getResult(ev) {
  const inputCharacter = ev.target.parentElement.querySelector('#js-input-name').value;
  fetch(`https://swapi.co/api/people/?search=${inputCharacter}`)
    .then(response => response.json())
    .then(data => {
      data.results;
      let results = data.results;
      paintResult(results);
    });
}

function paintResult(results) {
  const ul = document.querySelector('ul');
  for (const result of results) {
    const li = document.createElement('li');
    li.innerText = `Nombre: ${result.name}. Género: ${result.gender}`;
    ul.appendChild(li);
  }
}

const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getResult);
