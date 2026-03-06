# JavaScript Calculator

A simple calculator program that performs basic arithmetic operations and tracks a history of all calculations.

## Features

- Addition, subtraction, multiplication, and division
- Tracks all calculations in a history log
- Displays the full calculation history
- Handles edge cases like division by zero

## How to Run

1. Make sure you have [Node.js](https://nodejs.org) installed
2. Clone this repository
3. Run the script in your terminal:

```bash
node calculator.js
```

## Example Output

```
15
7
28
5
Error: Cannot divide by zero.
null
Calculation History:
1. 10 + 5 = 15
2. 10 - 3 = 7
3. 4 * 7 = 28
4. 20 / 4 = 5
```

## Functions

- `add(a, b)` – Returns the sum of a and b
- `subtract(a, b)` – Returns the difference of a and b
- `multiply(a, b)` – Returns the product of a and b
- `divide(a, b)` – Returns the quotient of a and b (returns null if b is 0)
- `addToHistory(a, operator, b, result)` – Saves a calculation to the history array
- `displayHistory()` – Prints all stored calculations to the console

## Future Improvements

- Add support for more operations (exponents, square root, etc.)
- Build a simple HTML/CSS user interface
- Add input validation for non-numeric characters
