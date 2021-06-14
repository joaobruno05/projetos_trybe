// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(word) {
  let result = word.split(' ');
  return result;
}

// Desafio 4
function concatName(array) {
  let word1 = array[array.length - 1];
  let word2 = array[0];
  let resultado = `${word1}, ${word2}`;

  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = 3 * wins;
  let tiesPoints = ties;
  let numeroDePontos = winsPoints + tiesPoints;

  return numeroDePontos;
}

// Desafio 6.1
function highestNumber(array) {
  let maiorNumero = -100;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  return maiorNumero;
}

// Desafio 6
function highestCount(array) {
  let sum = 0;

  for (let cont = 0; cont < array.length; cont += 1) {
    if (array[cont] === highestNumber(array)) {
      sum += 1;
    }
  }
  return sum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((Math.abs(mouse - cat1)) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  } if (cat1 > cat2) {
    return 'cat2';
  } if (cat2 > cat1) {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      result.push('fizz');
    } else if (array[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(word) {
  let newWord = '';
  for (let index = 0; index < word.length; index += 1) {
    if (word[index] === 'a') {
      newWord += '1';
    } else if (word[index] === 'e') {
      newWord += '2';
    } else if (word[index] === 'i') {
      newWord += '3';
    } else if (word[index] === 'o') {
      newWord += '4';
    } else if (word[index] === 'u') {
      newWord += '5';
    } else {
      newWord += word[index];
    }
  }
  return newWord;
}

function decode(word) {
  let newWord = '';
  for (let index = 0; index < word.length; index += 1) {
    if (word[index] === '1') {
      newWord += 'a';
    } else if (word[index] === '2') {
      newWord += 'e';
    } else if (word[index] === '3') {
      newWord += 'i';
    } else if (word[index] === '4') {
      newWord += 'o';
    } else if (word[index] === '5') {
      newWord += 'u';
    } else {
      newWord += word[index];
    }
  }
  return newWord;
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
};
