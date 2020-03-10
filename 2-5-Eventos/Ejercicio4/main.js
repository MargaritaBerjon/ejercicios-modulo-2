let background = document.querySelector('.background');

function color() {
  if (window.scrollY >= 250) {
    background.style = 'background-color: green;';
  } else {
    background.style = 'background-color:  aqua;';
  }
}
window.addEventListener('scroll', color);
