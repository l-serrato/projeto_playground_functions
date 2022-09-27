// Desafio 1
function compareTrue(par1, par2) {
  if (par1 === true && par2 === true){
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let array = phrase.split(' ');
  return array;
}

// Desafio 4
function concatName(name) {
 return `${name[name.length - 1]}, ${name[0]}`; 
}

// Desafio 5
function footballPoints(wins, ties) {
  score = (wins * 3) + ties;
  return score;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 < cat2) {
    return 'cat1';
  } else if (cat2 < cat1) {
    return 'cat2';
  }return 'os gatos trombam e o rato foge'
  
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
