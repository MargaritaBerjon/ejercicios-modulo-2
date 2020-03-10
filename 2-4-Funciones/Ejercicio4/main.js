function parImpar(a) {
  if (a % 2 === 0) {
    return 'par';
  } else {
    return 'impar';
  }
}

let number = parImpar(4);
console.log(number);
