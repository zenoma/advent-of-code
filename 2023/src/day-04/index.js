import { readInputFile } from "../utils/fileUtils.js";

// Function to parse the raw input, you can customize it according to your input format
const parseInput = (input) => input.trim().split("\n");

const input = parseInput(readInputFile("day-04/input.txt"));

// Part 1 solution function
function part1(input) {
  let acc = 0;
  for (let i = 0; i < input.length; i++) {
    const cardString = input[i].split(":")[1];
    const splitIndex = cardString.indexOf("|");
    const winningPart = cardString.substring(0, splitIndex).trim();
    const cardPart = cardString.substring(splitIndex + 1).trim();
    const winningNumbers = winningPart.split(/\s+/).map(Number);
    const cardNumbers = cardPart.split(/\s+/).map(Number);
    const winning = cardNumbers.filter((number) =>
      winningNumbers.includes(number),
    );
    if (winning.length > 0) {
      acc += 2 ** (winning.length - 1);
    }
  }
  return acc;
}

// Part 2 solution function
function part2(input) {
  return;
}

// Test for part 1
const part1Test = {
  input: `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3: 1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`,
  expected: 13,
};

// Test for part 2
const part2Test = {
  input: `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3: 1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`,
  expected: 30,
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
// console.log("Solution part 2:", part2(input));
