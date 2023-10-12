var displayValue = '';
var currentOperator = '';
var firstOperand = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    if (displayValue === '') return;
    if (firstOperand === '') {
        firstOperand = displayValue;
        displayValue = '';
        return;
    }
    var secondOperand = displayValue;
    var result = performOperation(firstOperand, currentOperator, secondOperand);
    displayValue = result;
    document.getElementById('display').value = displayValue;
    firstOperand = '';
}

function performOperation(operand1, operator, operand2) {
    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            if (operand2 === 0) {
                alert("Division by zero is not allowed.");
                clearDisplay();
                return '';
            }
            return operand1 / operand2;
        default:
            return operand2;
    }
}
