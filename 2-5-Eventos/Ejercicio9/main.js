let isra = document.querySelector('.teacher--isra');
let tuerto = document.querySelector('.teacher--tuerto');
let nasi = document.querySelector('.teacher--nasi');

function classToggle(event) {
  let teacherSelected = event.currentTarget;
  teacherSelected.classList.toggle('teacher--selected');
}

isra.addEventListener('click', classToggle);
tuerto.addEventListener('click', classToggle);
nasi.addEventListener('click', classToggle);
