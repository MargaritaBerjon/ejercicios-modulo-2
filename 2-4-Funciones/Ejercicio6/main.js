function getEl(selectorCSS) {
  const get = document.querySelector(selectorCSS);
  if (get === null) {
    console.log(`No existe ningún elemento con clase, id o tag llamado ${selectorCSS}`);
  }
  return get;
}

const btnEl = getEl('.btn');

const claseh1El = getEl('.claseh1');
const clasepEl = getEl('.clasep');

console.log(getEl('.btn').innerHTML);
console.log(getEl('.claseh1').innerHTML);
console.log(getEl('.clasep').outerHTML);

console.log(getEl('.clasez').outerHTML);
