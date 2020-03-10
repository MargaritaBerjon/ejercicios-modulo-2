function media(a, b, c, d) {
  return (a + b + c + d) / arguments.length;
}

let number = media(9, 8, 7, 6);

console.log(number);

number = media(1, 4, 3, 5);

//Media auto
//(...nombre de variable) varios parametros en uno (Array). F
function media2(...arg) {
  let res = 0;
  for (const num of arg) {
    res += num;
  }
  return res / arguments.length;
}
