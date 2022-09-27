// Desafio 11
function generatePhoneNumber(sequence) {
  let repeat = 0;
  let viewed = 0;
  let checked = 0;
  let limit = 3;
  for (let i = 0; i < sequence.length; i += 1){
    viewed = sequence[i];
    repeat = 0;
    if (repeat < limit) {
      for (index = 0; index < sequence.length; index += 1){
        checked = sequence[index];
        if (viewed === checked) {repeat += 1;}
      }
    } if (repeat >= limit) {return 'não é possível gerar um número de telefone com esses valores';}
  }
  if (sequence.length !== 11){return 'Array com tamanho incorreto.'}
  for (i = 0; i < sequence.length; i += 1){
    if (sequence[i] < 0 || sequence[i] > 9){return 'não é possível gerar um número de telefone com esses valores'}}

    let counter = 0;
    let phone;
    phone = ( '(' + sequence[0] + sequence[1] + ')' + ' ' + sequence[2] + sequence[3] + sequence[4] + sequence[5] + sequence[6] + '-' + sequence[7] + sequence[8] + sequence[9] + sequence[10]);
    return phone;
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
