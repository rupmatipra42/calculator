const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  const expression = display.value;

  // Basic input validation
  if (!/^[0-9.+\-*\/()]+$/.test(expression)) {
    display.value = "Invalid expression";
    return;
  }

  try {
    const result = Function(`return ${expression}`)();
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}