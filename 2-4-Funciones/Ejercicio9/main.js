// modificamos una variable de ámbito global
let secretLetter = 'y';

function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}

// const secretLetter =  'y' => secretLetter = 'x';

console.log(mySecretLetter());
console.log(secretLetter);

console.log(mySecretLetter(secretLetter));

secretLetter = mySecretLetter('y');
