let theme = document.querySelector('.js-themechoose');
let body = document.querySelector('body');

function themeChoose(ev) {
  if (ev.target.value === 'light') {
    body.classList.add('light');
    body.classList.remove('dark');
  } else {
    body.classList.add('dark');
    body.classList.remove('light');
  }
  localStorage.setItem('theme', ev.target.value);
}

theme.addEventListener('change', themeChoose);
body.classList.add(localStorage.getItem('theme'));
