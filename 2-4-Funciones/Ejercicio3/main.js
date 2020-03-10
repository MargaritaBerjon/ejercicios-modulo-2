function IVA(a) {
  return `Precion sin IVA: ${a}, IVA: ${0.21 * a} y Total: ${a + 0.21 * a}`;
}

let price = IVA(10);
console.log(price);

price = IVA(15);
('Precion sin IVA: 15, IVA: 3.15 y Total: 18.15');
