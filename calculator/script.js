const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

const operate = function(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            if (b === 0) return null;
            return divide(a, b);
        default:
            return null;
    }
};

const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.btnNums button:not(#btnDot)');
const dotButton = document.getElementById('btnDot');
const operatorButtons = document.querySelectorAll('.ops button:not(#btnEqual)');
const equalsButton = document.getElementById('btnEqual');
const clearButton = document.getElementById('btnClear');
const allClearButton = document.getElementById('btnAC');

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
    });
});

dotButton.addEventListener('click', appendPoint);

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        setOperation(button.textContent);
    });
});

equalsButton.addEventListener('click', evaluate);

clearButton.addEventListener('click', deleteNumber);

allClearButton.addEventListener('click', clearAll);

function appendNumber(number) {
    if (display.textContent === '0' || shouldResetScreen) {
        resetScreen();
    }
    display.textContent += number;
}

function resetScreen() {
    display.textContent = '';
    shouldResetScreen = false;
}

function appendPoint() {
    if (shouldResetScreen) resetScreen();
    if (display.textContent === '') display.textContent = '0';
    if (display.textContent.includes('.')) return;
    display.textContent += '.';
}

function deleteNumber() {
    display.textContent = display.textContent.toString().slice(0, -1);
    if (display.textContent === '') display.textContent = '0';
}

function setOperation(operator) {
    if (currentOperation !== null) evaluate();
    firstOperand = display.textContent;
    currentOperation = operator;
    shouldResetScreen = true;
}

function evaluate() {
    if (currentOperation === null || shouldResetScreen) return;
    if (currentOperation === '/' && display.textContent === '0') {
        alert("You can't divide by 0!");
        clearAll();
        return;
    }

    secondOperand = display.textContent;

    let opSymbol = currentOperation;
    if (opSymbol === '÷') opSymbol = '/';
    if (opSymbol === '×') opSymbol = '*';
    if (opSymbol === '−') opSymbol = '-';
    const result = operate(opSymbol, firstOperand, secondOperand);

    display.textContent = Math.round(result * 1000) / 1000;

    currentOperation = null;
}

function clearAll() {
    display.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
    shouldResetScreen = false;
}