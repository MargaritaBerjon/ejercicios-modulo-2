'use strict';
//NO ESTÁ TERMINADO. Preguntar cómo recuperar datos de localStorage y no hacer nueva petición.
let results = '';

function getResult(ev) {
  if (JSON.parse(localStorage.getItem('results')) && localStorage.getItem('results').value) {
    paintResult(results);
  } else {
    const inputCharacter = ev.target.parentElement.querySelector('#js-input-name').value;
    fetch(`https://swapi.co/api/people/?search=${inputCharacter}`)
      .then(response => response.json())
      .then(data => {
        data.results;
        results = data.results;
        paintResult(results);
        localStorage.setItem('results', JSON.stringify(results));
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
