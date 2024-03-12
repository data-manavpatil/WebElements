function clearResult() {
  document.getElementById('result').value = '';
}

function appendToResult(value) {
  document.getElementById('result').value += value;
}

function calculateResult() {
  try {
    document.getElementById('result').value = eval(document.getElementById('result').value);
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function clearAll() {
  document.getElementById('result').value = '';
}
