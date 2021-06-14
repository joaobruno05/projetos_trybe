// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  let listObjects = [];
  let listOrderedTech = tech.sort();

  for (let index = 0; index < listOrderedTech.length; index += 1) {
    listObjects.push({ tech: listOrderedTech[index], name });
  }
  return listObjects;
}

// Desafio 11
function generatePhoneNumber(number) {
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < number.length; index += 1) {
    let sum = 1;
    for (let cont = 0; cont < number.length; cont += 1) {
      if (index !== cont) {
        if (number[index] === number[cont]) {
          sum += 1;
        }
        if (sum >= 3 || number[index] > 9 || number[index] < 0) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  let FirstTwoNumbers = '';
  for (let index = 0; index < 2; index += 1) {
    FirstTwoNumbers += number[index];
  }

  let numberPartOne = '';
  for (let index = 2; index < 7; index += 1) {
    numberPartOne += number[index];
  }

  let numberPartTwo = '';
  for (let index = 7; index < 11; index += 1) {
    numberPartTwo += number[index];
  }
  return `(${FirstTwoNumbers}) ${numberPartOne}-${numberPartTwo}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA > lineB + lineC) || (lineB > lineA + lineC) || (lineC > lineA + lineB)) {
    return false;
  }
  if ((lineA < Math.abs(lineB - lineC)) || (lineB < Math.abs(lineA - lineC)) || (lineC < Math.abs(lineA - lineB))) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let onlyNumbers = string.match(/\d+/g);
  let totalBeverages = 0;
  for (let index = 0; index < onlyNumbers.length; index += 1) {
    totalBeverages += parseInt(onlyNumbers[index], 10);
  }
  if (totalBeverages === 1) {
    return `${totalBeverages} copo de água`;
  }
  return `${totalBeverages} copos de água`;
}
console.log(hydrate('1 cachaça'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
