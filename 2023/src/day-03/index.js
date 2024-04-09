import { readInputFile } from "../utils/fileUtils.js";

// Function to parse the raw input, you can customize it according to your input format
const parseInput = (input) => input.trim().split("\n");

const input = parseInput(readInputFile("day-03/input.txt"));

function findHoleNumber(input, i, j) {
  const number = [];
  while (!isNaN(input[i][j])) {
    number.push(input[i][j]);
    j++;
  }
  return number.join("");
}

function isPartNumber(input, number, i, j) {
  const symbols = ["*", "+", "#", "$", "/", "=", "-", "&", "@", "%"];

  for (let k = 0; k < number.length; k++) {
    for (let xOffset = -1; xOffset <= 1; xOffset++) {
      for (let yOffset = -1; yOffset <= 1; yOffset++) {
        const row = i + Math.floor(k / 3) + xOffset;
        const col = j + (k % 3) + yOffset;

        if (
          row >= 0 &&
          row < input.length &&
          col >= 0 &&
          col < input[0].length &&
          (xOffset !== 0 || yOffset !== 0)
        ) {
          if (symbols.includes(input[row][col])) {
            return true;
          }
        }
      }
    }
  }
  return false; // Return false if no symbol is found adjacent to any character of the number
}

// Part 1 solution function
function part1(input) {
  const rows = input.length;
  const cols = input[0].length;
  const partNumbers = [];
  let sum = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let number = parseInt(input[i][j]);
      if (!isNaN(number)) {
        const number = findHoleNumber(input, i, j);
        if (isPartNumber(input, number, i, j)) {
          partNumbers.push(number);
        }
        j += number.length;
      }
    }
  }

  for (let i = 0; i < partNumbers.length; i++) {
    sum += parseInt(partNumbers[i]);
  }
  return sum;
}

// (i-1, j-1)  (i-1, j)  (i+1, j+1)
// (i  , j-1)  (i  , j)  (i  , j+1)
// (i+1, j-1)  (i+1, j)  (i+1, j+1)

// Part 2 solution function
function part2(input) {
  const rows = input.length;
  const cols = input[0].length;
  const partNumbers = [];
  let sum = 0;

  // Función para verificar si un carácter es un número
  const isNumber = (char) => !isNaN(parseInt(char));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (input[i][j] === "*") {
        const gearNumbers = [];
        // Buscar en las 8 posiciones adyacentes
        for (let di = -1; di <= 1; di++) {
          for (let dj = -1; dj <= 1; dj++) {
            // Evitar la posición del '*'
            if (!(di === 0 && dj === 0)) {
              const ni = i + di;
              const nj = j + dj;
              // Verificar si la posición está dentro de los límites
              if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
                const char = input[ni][nj];
                // Si el caracter es un número, buscar el número completo al que pertenece
                if (isNumber(char)) {
                  let number = char;
                  // Buscar hacia la izquierda
                  for (let k = nj - 1; k >= 0 && isNumber(input[ni][k]); k--) {
                    number = input[ni][k] + number;
                  }
                  // Buscar hacia la derecha
                  for (
                    let k = nj + 1;
                    k < cols && isNumber(input[ni][k]);
                    k++
                  ) {
                    number += input[ni][k];
                  }
                  if (!gearNumbers.includes(parseInt(number))) {
                    gearNumbers.push(parseInt(number));
                  }
                }
              }
            }
          }
        }
        if (gearNumbers.length == 2) {
          partNumbers.push(gearNumbers[0] * gearNumbers[1]);
        }
      }
    }
  }

  for (let i = 0; i < partNumbers.length; i++) {
    sum += parseInt(partNumbers[i]);
  }
  return sum;
}

// Test for part 1
const part1Test = {
  input: `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`,
  expected: 4361,
};

// Test for part 2
const part2Test = {
  input: `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`,
  expected: 467835,
};

// Run function to run a single test
const runTest = (test, func) => {
  const colors = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    red: "\x1b[31m",
  };

  const result = func(parseInput(test.input));

  console.log("Expected:", test.expected);
  console.log("Result:", result);
  if (result === test.expected) {
    console.log(colors.green + "Passed: Yes" + colors.reset);
  } else {
    console.log(colors.red + "Passed: No" + colors.reset);
  }
  console.log("------------------------------------------------");
};

// Run test for part 1
console.log("Running test for part 1:");
runTest(part1Test, part1);

// Run test for part 2
console.log("Running test for part 2:");
runTest(part2Test, part2);

// Execute part 1
console.log("Solution part 1:", part1(input));

// Execute part 1
console.log("Solution part 2:", part2(input));
