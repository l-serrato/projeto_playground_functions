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
  let cat1Place = Math.abs(mouse - cat1);
  let cat2Place = Math.abs(mouse - cat2);
  if (cat1Place < cat2Place) {
    return 'cat1';
  } else if (cat2Place < cat1Place) {
    return 'cat2';
  }return 'os gatos trombam e o rato foge';
  
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
