import { readInputFile } from "../utils/fileUtils.js";

// Function to parse the raw input, you can customize it according to your input format
const parseInput = (input) => input.trim().split("\n");

const input = parseInput(readInputFile("day-01/input.txt"));

// Part 1 solution function
function part1(input) {
  let firstDigit = 0;
  let lastDigit = 0;
  let acc = 0;
  for (let i = 0; i < input.length; i++) {
    let line = input[i];
    for (let j = 0; j < line.length; j++) {
      let firstChar = line[j];
      if (!isNaN(parseInt(firstChar))) {
        firstDigit = parseInt(firstChar);
        break;
      }
    }

    for (let j = line.length - 1; j >= 0; j--) {
      let secondChar = line[j];
      if (!isNaN(parseInt(secondChar))) {
        lastDigit = parseInt(secondChar);
        break;
      }
    }
    acc += parseInt(firstDigit.toString() + lastDigit.toString());
    firstDigit = 0;
    lastDigit = 0;
  }
  return acc;
}

// Part 2 solution function
function part2(input) {
  const spelledNumbers = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let firstDigit = 0;
  let lastDigit = 0;
  let acc = 0;

  for (let i = 0; i < input.length; i++) {
    let line = input[i];

    for (let j = 0; j < spelledNumbers.length; j++) {
      let spelledNumber = spelledNumbers[j];
      if (line.includes(spelledNumber)) {
        let replacement =
          spelledNumber[0] + (j + 1) + spelledNumber[spelledNumber.length - 1];
        line = line.replace(spelledNumber, replacement);
      }
    }

    for (let j = 0; j < line.length; j++) {
      let firstChar = line[j];
      if (!isNaN(parseInt(firstChar))) {
        firstDigit = parseInt(firstChar);
        break;
      }
    }

    for (let j = line.length - 1; j >= 0; j--) {
      let secondChar = line[j];
      if (!isNaN(parseInt(secondChar))) {
        lastDigit = parseInt(secondChar);
        break;
      }
    }

    acc += parseInt(firstDigit.toString() + lastDigit.toString());
    firstDigit = 0;
    lastDigit = 0;
  }

  return acc;
}

// Test for part 1
const part1Test = {
  input: `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`,
  expected: 142,
};

// Test for part 2
const part2Test = {
  input: `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`,
  expected: 281,
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
