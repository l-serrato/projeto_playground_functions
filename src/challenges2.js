// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let conditionA = lineA < Math.abs(lineB + lineC) && lineA > Math.abs(lineB - lineC);
  let conditionB = lineB < Math.abs(lineA + lineC) && lineB > Math.abs(lineA - lineC);
  let conditionC = lineC < Math.abs(lineB + lineA) && lineC > Math.abs(lineB - lineA);
  return conditionA && conditionB && conditionC;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
