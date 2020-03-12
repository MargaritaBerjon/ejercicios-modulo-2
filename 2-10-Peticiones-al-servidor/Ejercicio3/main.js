function getResult(ev) {
  const username = ev.target.parentElement.querySelector('#js-input-name').value;
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      //Los parámetros los cojo de los datos que devuelve el servidor https://api.github.com/users/gootyfer
      paintHTML(data.login, data.avatar_url, data.public_repos);
    });
}

function paintHTML(name, src, repositories) {
  document.querySelector('.js-name').innerText = name;
  document.querySelector('.js-image').src = src;
  document.querySelector('.js-repositories').innerText = repositories;
}

const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getResult);
