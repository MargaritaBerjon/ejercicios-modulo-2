let todo = document.querySelector('body');
todo.addEventListener('keyup', color);

function color() {
  let key = event.key;
  if ((key = '82')) {
    todo.style.backgroundColor = 'red';
  } else if ((key = '77')) {
    todo.style.backgroundColor = 'purple';
  }
}
//Hace lo mismo pero con ===

// function color() {
//   let key = event.key;
//   if (key === 'r') {
//     todo.style.backgroundColor = 'red';
//   } else if (key === 'm') {
//     todo.style.backgroundColor = 'purple';
//   }
// }
