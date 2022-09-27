// Desafio 11
function generatePhoneNumber(sequence) {
  if (sequence.length !== 11){
    return 'Array com tamanho incorreto.'
  }
  for (let num of sequence){
    if (num < 0 || num > 9){
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let sequenceSorted = sequence.slice(0);
  sequenceSorted.sort(function (a, b) { return a - b});
  for (let i = 0; i <=8; i += 1){
    if(sequenceSorted[i] === sequenceSorted[i + 2]){
      message = 'não é possível gerar um número de telefone com esses valores';
    }
    }
  return message;

  let number = ' ';
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let conditionA = lineA < Math.abs(lineB + lineC) && lineA > Math.abs(lineB - lineC);
  let conditionB = lineB < Math.abs(lineA + lineC) && lineB > Math.abs(lineA - lineC);
  let conditionC = lineC < Math.abs(lineB + lineA) && lineC > Math.abs(lineB - lineA);
  return conditionA && conditionB && conditionC;
}

// Desafio 13
function hydrate(drinks) {
  let numberOfDrinks = drinks.match(/\d+/g).map(Number);
  let glassesOfWater = numberOfDrinks.reduce((a, b) => a + b, 0);
  let total = '';
  if (glassesOfWater === 1){
    total = `${glassesOfWater} copo de água`;
  }else {
    total = `${glassesOfWater} copos de água`;
  }
  return total;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
