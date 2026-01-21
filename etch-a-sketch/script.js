const container = document.querySelector('#container');
const blackBtn = document.querySelector('#blackBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const clearBtn = document.querySelector('#clearBtn');
const sizeSlider = document.querySelector('#sizeSlider');
const sizeValue = document.querySelector('#sizeValue');

let currentMode = 'black';
let currentSize = 16;


blackBtn.onclick = () => setCurrentMode('black');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
clearBtn.onclick = () => reloadGrid();

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

function setCurrentMode(newMode) {
    activateButton(newMode);
    currentMode = newMode;
}

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`;
}

function changeSize(value) {
    currentSize = value;
    updateSizeValue(value);
    reloadGrid();
}

function reloadGrid() {
    clearGrid();
    createGrid(currentSize);
}

function clearGrid() {
    container.innerHTML = '';
}

function createGrid(size) {
    let widthOrHeight = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');

        cell.style.width = `${widthOrHeight}px`;
        cell.style.height = `${widthOrHeight}px`;

        cell.addEventListener('mouseover', changeColor);

        container.appendChild(cell);
    }
}

function changeColor(e) {
    if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (currentMode === 'black') {
        e.target.style.backgroundColor = 'black';
    }
}

function activateButton(newMode) {
    if (newMode === 'rainbow') {
        rainbowBtn.classList.add('active');
        blackBtn.classList.remove('active');
    } else if (newMode === 'black') {
        blackBtn.classList.add('active');
        rainbowBtn.classList.remove('active');
    }
}

window.onload = () => {
    createGrid(16);
    activateButton('black');
}