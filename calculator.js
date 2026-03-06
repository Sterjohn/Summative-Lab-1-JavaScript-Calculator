// Calculator Program

// History array to store calculations
let history = [];

// Add a calculation to history
function addToHistory(a, operator, b, result) {
  history.push({ a, operator, b, result });
}

// Display the history
function displayHistory() {
  if (history.length === 0) {
    console.log("No calculations yet.");
  } else {
    console.log("Calculation History:");
    for (let i = 0; i < history.length; i++) {
      console.log(i + 1 + ". " + history[i].a + " " + history[i].operator + " " + history[i].b + " = " + history[i].result);
    }
  }
}

// Add two numbers
function add(a, b) {
  let result = a + b;
  addToHistory(a, "+", b, result);
  return result;
}

// Subtract two numbers
function subtract(a, b) {
  let result = a - b;
  addToHistory(a, "-", b, result);
  return result;
}

// Multiply two numbers
function multiply(a, b) {
  let result = a * b;
  addToHistory(a, "*", b, result);
  return result;
}

// Divide two numbers
function divide(a, b) {
  if (b === 0) {
    console.log("Error: Cannot divide by zero.");
    return null;
  }
  let result = a / b;
  addToHistory(a, "/", b, result);
  return result;
}

// Test the functions
console.log(add(10, 5));
console.log(subtract(10, 3));
console.log(multiply(4, 7));
console.log(divide(20, 4));
console.log(divide(9, 0));

displayHistory();
