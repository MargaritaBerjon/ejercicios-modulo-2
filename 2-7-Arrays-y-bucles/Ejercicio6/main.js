document.querySelector('button').addEventListener('click', save2);

function save2(ev) {
  let books = [ev.target.form.libro1.value, ev.target.form.libro2.value];
  for (const book of books) {
    console.log('¡A mí también me encantó ' + book + '. Tenemos mucho en común, humana.');
  }
}

// function save(form) {
//   let books = [form.libro1.value, form.libro2.value];
//   for (const book of books) {
//     console.log('¡A mí también me encantó ' + book + '. Tenemos mucho en común, humana.');
//   }
// }
