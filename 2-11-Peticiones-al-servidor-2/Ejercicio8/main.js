'use strict';

function getResult(ev) {
  const inputCharacter = ev.target.parentElement.querySelector('#js-input-name').value;
  const item = JSON.parse(localStorage.getItem(inputCharacter.toUpperCase()));
  if (item) {
    paintResult(item);
  } else {
    fetch(`https://swapi.co/api/people/?search=${inputCharacter}`)
      .then(response => response.json())
      .then(data => {
        data.results;
        const results = data.results;
        paintResult(results);
        localStorage.setItem(inputCharacter.toUpperCase(), JSON.stringify(results));
      });
  }
}

function paintResult(results) {
  if (results.length === 0) {
    alert('Personaje no encontrado');
  } else {
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
    for (const result of results) {
      const li = document.createElement('li');
      li.innerText = `Nombre: ${result.name}. Género: ${result.gender}`;
      ul.appendChild(li);
    }
  }
}

const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getResult);
