const blackboard = document.querySelector('.js-punish');

function writePunish() {
  const myPunish = 'He aprendido bien cómo funcionan los bucles';

  for (let i = 0; i < 101; i++) {
    const createParagraph = document.createElement('p');
    const addContent = document.createTextNode(myPunish);

    createParagraph.appendChild(addContent);
    blackboard.appendChild(createParagraph);
    let createSelect = document.createElement('select');
    createSelect.id = i;
    blackboard.appendChild(createSelect);

    let colorName = ['blanco', 'azul', 'rojo', 'verde', 'amarillo', 'rosa'];
    for (let m = 0; m < colorName.length; m++) {
      let createOption = document.createElement('option');

      createOption.value = colorName[m];
      createOption.text = colorName[m];
      createOption.id = m;
      createSelect.appendChild(createOption);
    }
    createSelect.addEventListener('change', changeColor);
  }
}
writePunish();

function changeColor(event) {
  let index = event.target.selectedIndex;
  let paragraph = document.querySelectorAll('p')[event.target.id];

  if (index === 0) paragraph.style.color = 'white';
  else if (index === 1) paragraph.style.color = 'blue';
  else if (index === 2) paragraph.style.color = 'red';
  else if (index === 3) paragraph.style.color = 'green';
  else if (index === 4) paragraph.style.color = 'yellow';
  else paragraph.style.color = 'pink';
}
