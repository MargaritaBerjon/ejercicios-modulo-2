let theme = document.querySelector('.js-themechoose');
let body = document.querySelector('body');

function themeChoose(ev) {
  if (ev.target.value === 'light-text') {
    body.classList.add('light-text');
    body.classList.remove('dark-text');
  } else {
    body.classList.add('dark-text');
    body.classList.remove('light-text');
  }
}

theme.addEventListener('change', themeChoose);
