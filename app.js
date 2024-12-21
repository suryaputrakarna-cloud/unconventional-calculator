const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-sub');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('result');
const currentCalculationOutput = document.getElementById('current-calc');

const defaultValue = 0;
let currentResult = defaultValue;

const getUserInput = () => {
  return parseInt(userInput.value);
}

const outputResult = (result, text) => {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

const createAndWriteOutput = (operator, initialResult, enteredNumber) => {
  const calcDescription = `${initialResult} ${operator} ${enteredNumber}`;
  outputResult(currentResult, calcDescription);
}

const calculate = (operator) => {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = eval(currentResult + operator + enteredNumber);
  createAndWriteOutput(operator, initialResult, enteredNumber);
}

addBtn.addEventListener('click', () => calculate('+'));
subtractBtn.addEventListener('click', () => calculate('-'));
multiplyBtn.addEventListener('click', () => calculate('*'));
divideBtn.addEventListener('click', () => calculate('/'));