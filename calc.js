const resultField = document.getElementById("result");
let currentInput = "";
let operator = null;
let firstOperand = null;

function clear() {
    currentInput = "";
    operator = null;
    firstOperand = null;
    resultField.value = "";
}

function appendNumber(number) {
    currentInput += number;
    resultField.value = currentInput;
}

function setOperator(newOperator) {
    if (currentInput === "") return;
    if (operator !== null) calculate();
    firstOperand = parseFloat(currentInput);
    operator = newOperator;
    currentInput = "";
}

function calculate() {
    if (operator === null || currentInput === "") return;
    let secondOperand = parseFloat(currentInput);
    let result;
    switch (operator) {
        case "+":
            result = firstOperand + secondOperand;
            break;
        case "-":
            result = firstOperand - secondOperand;
            break;
        case "×":
            result = firstOperand * secondOperand;
            break;
        case "÷":
            result = firstOperand / secondOperand;
            break;
        case "%":
            result = firstOperand % secondOperand;
            break;
        default:
            return;
    }
    resultField.value = result;
    currentInput = result.toString();
    operator = null;
    firstOperand = null;
}

function toggleSign() {
    if (currentInput === "") return;
    currentInput = (parseFloat(currentInput) * -1).toString();
    resultField.value = currentInput;
}

function addDecimal() {
    if (currentInput.includes(".")) return;
    currentInput += ".";
    resultField.value = currentInput;
}

document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", () => appendNumber(button.textContent));
});

document.querySelectorAll(".operator").forEach(button => {
    switch (button.textContent) {
        case "C":
            button.addEventListener("click", clear);
            break;
        case "±":
            button.addEventListener("click", toggleSign);
            break;
        case ".":
            button.addEventListener("click", addDecimal);
            break;
        default:
            button.addEventListener("click", () => setOperator(button.textContent));
    }
});

document.querySelector(".equal").addEventListener("click", calculate);