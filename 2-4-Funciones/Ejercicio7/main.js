function getEl(selectorCSS) {
  const get = document.querySelector(selectorCSS);
  if (get === null) {
    console.log(`No existe ningún elemento con clase, id o tag llamado ${selectorCSS}`);
  }
  return get;
}

function parImpar(a) {
  if (a % 2 === 0) {
    return 'par';
  } else {
    return 'impar';
  }
}

const numberP = getEl('.clasep').innerHTML;

console.log(numberP);

const number = parseInt(getEl('.clasep').innerHTML);

console.log('Este número es ' + parImpar(number));
