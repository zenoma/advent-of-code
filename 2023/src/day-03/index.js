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
    const numChar = number[k];
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

// (i-1, j-1)  (i-1, j)  (i+1, j+1)
// (i  , j-1)  (i  , j)  (i  , j+1)
// (i+1, j-1)  (i+1, j)  (i+1, j+1)

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
      // const number = getHoleNumber(input, i, j);
    }
  }

  for (let i = 0; i < partNumbers.length; i++) {
    sum += parseInt(partNumbers[i]);
  }
  return sum;
}

// Part 2 solution function
function part2(input) {
  return;
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
  expected: "",
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
// console.log("Running test for part 2:");
// runTest(part2Test, part2);

// Execute part 1
console.log("Solution part 1:", part1(input));

// Execute part 1
// console.log("Solution part 2:", part2(input));
