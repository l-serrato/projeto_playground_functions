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
function highestCount(numbers) {
  let biggest = numbers[0];
  for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] > biggest){
      biggest = numbers[i];
    }
  }
  let counter = 0;
  for (let index = 0; index < numbers.length; index += 1){
    if (biggest === numbers[index]){
      counter += 1;
    }
  }
  return counter;
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
function fizzBuzz(nums) {
  let outcome = [];
  for (let item of nums){
    if (item % 3 === 0 && item % 5 === 0){
      outcome.push('fizzBuzz');
    } else if (item % 3 === 0){
      outcome.push('fizz');
    } else if (item % 5 === 0){
      outcome.push('buzz');
    }else {
    outcome.push('bug!');
    }
  }
  return outcome
} 

// Desafio 9
function encode(string) {
  let code = string.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5);
  return code;
}
function decode(sentence) {
  let cypher = sentence.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
  return cypher;
}

// Desafio 10
function techList(techs, str) {
  if (techs.length === 0){
    return 'Vazio!';
  }
  let seq = [];
  techs.sort();
  for (let type of techs){
    let object = {
      tech: type,
      name:`${str}`,
    };
    seq.push(object);
  }
  return seq;
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
