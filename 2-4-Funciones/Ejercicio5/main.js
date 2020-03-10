function getEl(selectorCSS) {
  return document.querySelector(selectorCSS);
}

const btnEl = getEl('.btn');

const claseh1El = getEl('.claseh1');
const clasepEl = getEl('.clasep');

console.log(getEl('.btn').innerHTML);
console.log(getEl('.claseh1').innerHTML);
console.log(getEl('.clasep').outerHTML);

console.log(clasepEl);
