// modificamos una variable de ámbito global
let secretLetter = 'y';

function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}

console.log(mySecretLetter());
console.log(secretLetter);

console.log(mySecretLetter(secretLetter));

secretLetter = mySecretLetter('y');
