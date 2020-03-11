function get100Numbers() {
  let numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }
  return numbers.reverse();
}
console.log(get100Numbers());
