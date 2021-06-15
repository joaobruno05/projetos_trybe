// Criando as paletas de cores
const colors = document.getElementsByClassName('color');

const tr = document.querySelector('tr');
function createLinesTable() {
  for (let index = 0; index < 4; index += 1) {
    const td = document.createElement('td');
    td.className = 'color';
    tr.appendChild(td);
  }
}
createLinesTable();

colors[0].style.backgroundColor = 'black';
colors[0].className += ' selected';
colors[1].style.backgroundColor = 'blue';
colors[2].style.backgroundColor = 'red';
colors[3].style.backgroundColor = 'yellow';

// Criando os blocos quadrados
const pixelBoard = document.getElementById('pixel-board');
function addPixelFrame() {
  for (let index = 0; index < 25; index += 1) {
    const divFrame = document.createElement('div');
    divFrame.className = 'pixel';
    pixelBoard.appendChild(divFrame);
  }
}
addPixelFrame();

// Adicionando a classe select às paletas
const colorPalette = document.getElementById('color-palette');
function classesSelected(event) {
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].className === 'color selected') {
      colors[index].classList.remove('selected');
      event.target.classList.add('selected');
    }
  }
}

function changeClassSelected() {
  colorPalette.addEventListener('click', classesSelected);
}
changeClassSelected();

// Alterando a cor dos blocos de acordo com as paletas escolhida
function changeColor(event) {
  const fact = event;
  for (let cont = 0; cont < colors.length; cont += 1) {
    if (colors[cont].className.includes('select')) {
      fact.target.style.backgroundColor = colors[cont].style.backgroundColor;
    }
  }
}

function addSquareColor() {
  pixelBoard.addEventListener('click', changeColor);
}
addSquareColor();

// Criando botão que limpa as cores dos blocos
const getButton = document.getElementById('clear-board');
const pixel = document.querySelectorAll('.pixel');
function clearAll() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

function clickButton() {
  getButton.addEventListener('click', clearAll);
}
clickButton();

// Criando quadro de pixels de acordo com o digitado pelo usuário
const inputNumber = document.getElementById('board-size');
const frameSizeBtn = document.getElementById('generate-board');

function setPixelFrameSize() {
  frameSizeBtn.addEventListener('click', () => {
    let N = inputNumber.value;
    for (let index = 0; index < 25; index += 1) {
      pixel[index].remove();
    }
    if (N === '') {
      alert('Board inválido!');
    }
    if (N > 0) {
      if (N < 5) {
        N = 5;
        inputNumber.value = 5;
      }
      if (N > 50) {
        N = 50;
        inputNumber.value = 50;
      }
      for (let index = 0; index < N * N; index += 1) {
        const chosenDivFrame = document.createElement('div');
        chosenDivFrame.className = 'pixel';
        pixelBoard.appendChild(chosenDivFrame);
        const boardWidth = (N * 42);
        const boardHeight = (N * 42);
        pixelBoard.style.width = boardWidth + 'px';
        pixelBoard.style.height = boardHeight + 'px';
      }
    }
  });
}
setPixelFrameSize();
