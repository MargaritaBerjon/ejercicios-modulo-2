525600 * 31;
16293600;
16293600 / 60;
271560; //horas de vida con 31 años

const años60 = 525600;
const miEdad = document.querySelector('.edad');

const misHoras = (años60 * parseInt(miEdad.innerHTML)) / 60;

console.log(misHoras);
