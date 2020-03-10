let numbers = [1, 4, 7, 6, 2];

function average(numbers) {
  let acc = 0;
  for (let i = 0; i < numbers.length; i = i + 1) {
    acc += numbers[i];
  }
  return acc / numbers.length;
}

console.log('La media es: ' + average(numbers));
