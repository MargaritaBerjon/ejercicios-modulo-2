let lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNomber() {
  let lostNumbersPair = [];
  let lostNumbersThree = [];
  for (const number of lostNumbers) {
    if (number % 2 == 0) {
      lostNumbersPair.push(number);
    }
    if (number % 3 == 0) {
      lostNumbersThree.push(number);
    }
  }

  return lostNumbersPair.concat(lostNumbersThree);
}
bestLostNomber();
//resultado (6) [4, 8, 16, 42, 15, 42]
