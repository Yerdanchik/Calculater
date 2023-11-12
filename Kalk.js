let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

function calculate() {
  try {
    displayValue = evaluateExpression(displayValue);
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function evaluateExpression(expression) {
  const operators = ['+', '-', '*', '/'];

  // Split the expression into operands and operator
  for (const operator of operators) {
    const parts = expression.split(operator);
    if (parts.length > 1) {
      const a = parseFloat(parts[0]);
      const b = parseFloat(parts[1]);

      switch (operator) {
        case '+':
          return add(a, b);
        case '-':
          return subtract(a, b);
        case '*':
          return multiply(a, b);
        case '/':
          return divide(a, b);
        default:
          throw new Error('Invalid operator');
      }
    }
  }

  // If no operator is found, return the original expression
  return parseFloat(expression);
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}
