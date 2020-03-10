let yearDog = 2;

let humanYears = 0;

if (yearDog > 0) {
  // humanYears = humanYears+15;
  humanYears += 15;
}
if (yearDog > 1) {
  humanYears += 9;
}
if (yearDog > 2) {
  humanYears += (yearDog - 2) * 5;
}

console.log(humanYears);
