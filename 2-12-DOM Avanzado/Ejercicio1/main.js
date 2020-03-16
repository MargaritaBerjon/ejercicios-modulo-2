'use strict';

const numbers = [1, 2, 3];
const ul = document.querySelector('ul');

for (const number of numbers) {
  const newItem = document.createElement('li');
  const newContent = document.createTextNode(number);
  newItem.appendChild(newContent);
  ul.appendChild(newItem);
}
