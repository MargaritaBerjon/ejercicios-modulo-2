const datas = [
  {
    name: 'Margui',
    surname: 'Berjón',
    phone: 620457812
  },
  {
    name: 'Aida',
    surname: 'De la fuente',
    phone: 643456789
  },
  {
    name: 'Alio',
    surname: 'Agudo',
    phone: 642583056
  }
];

let form = document.querySelector('.js-form');
const selectName = document.querySelector('.js-select-name');
let inputName = document.querySelector('.js-name');
let inputSurName = document.querySelector('.js-surname');
let inputPhone = document.querySelector('.js-phone');

function showMyData() {
  for (const data of datas) {
    if (data.name === selectName.value) {
      inputName.value = data.name;
      inputSurName.value = data.surname;
      inputPhone.value = data.phone;
    }
  }
}

selectName.addEventListener('change', showMyData);
