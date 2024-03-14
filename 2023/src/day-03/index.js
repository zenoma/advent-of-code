import { readInputFile } from "../utils/fileUtils.js";

// Function to parse the raw input, you can customize it according to your input format
const parseInput = (input) => input.trim().split("\r\n");

const input = parseInput(readInputFile("day-03/input.txt"));

// Part 1 solution function
function part1(input) {
  return "";
}

// Part 2 solution function
function part2(input) {
  return;
}

// Test for part 1
const part1Test = {
  input: "",
  expected: "",
};

// Test for part 2
const part2Test = {
  input: ``,
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
console.log("Running test for part 2:");
runTest(part2Test, part2);

// Execute part 1
console.log("Solution part 1:", part1(input));

// Execute part 1
console.log("Solution part 2:", part2(input));
