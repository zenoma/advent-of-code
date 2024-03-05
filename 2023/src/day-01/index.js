import { readInputFile } from "../utils/fileUtils.js";

// Function to parse the raw input, you can customize it according to your input format
const parseInput = (input) => input.trim().split("\r\n");

const input = parseInput(readInputFile("day-01/input.txt"));

// Part 1 solution function
const part1 = (input) => {
  return input;
};

// Part 2 solution function
const part2 = (input) => {
  return;
};

// Test for part 1
const part1Test = {
  input: ``,
  result: "",
  expected: "-",
};

// Test for part 2
const part2Test = {
  input: ``,
  result: "",
  expected: "",
};

// Run function to run a single test
const runTest = (test) => {
  const colors = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    red: "\x1b[31m",
  };

  console.log("Expected:", test.expected);
  console.log("Result:", test.result);
  if (test.result === test.expected) {
    console.log(colors.green + "Passed: Yes" + colors.reset);
  } else {
    console.log(colors.red + "Passed: No" + colors.reset);
  }
  console.log("------------------------------------------------");
};

// Run test for part 1
console.log("Running test for part 1:");
runTest(part1Test);

// Run test for part 2
console.log("Running test for part 2:");
runTest(part2Test);

// Execute part 1
part1(input);

// Execute part 2
part1(input);
