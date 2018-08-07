function init() {
  const firstInput = document.querySelector('.first-value');
  const secondInput = document.querySelector('.second-value');
  const result = document.querySelector('.res');
  const controlsContainer = document.querySelector('.controls-container');

  controlsContainer.addEventListener(
    'click',
    (e) => outputResult(e, firstInput, secondInput, result)
  );
}

function calc(op, a, b) {
  switch (op) {
    case 'sum':
      return a + b;
    case 'min':
      return a - b;
    case 'div':
      return a / b;
    case 'mul':
      return a * b;
    default:
      return 'wrong operation';
  }
}

function convertToNumber(value) {
  return parseInt(value, 10) || 0;
}

function outputResult(e, firstInput, secondInput, result) {
  const op = e.target.name;

  result.textContent = calc(
    op,
    convertToNumber(firstInput.value),
    convertToNumber(secondInput.value)
  );
}

window.addEventListener('load', init);
