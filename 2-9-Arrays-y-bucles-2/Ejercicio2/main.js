let numbers = [];
function get100Numbers() {
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }
  return numbers;
}
console.log(get100Numbers());

function getReversed100Numbers() {
  get100Numbers();
  return numbers.reverse();
}

console.log(getReversed100Numbers());
