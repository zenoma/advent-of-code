import { readInputFile } from "../utils/fileUtils.js";

// Function to parse the raw input, you can customize it according to your input format
const parseInput = (input) => {
  const games = [];
  const lines = input.trim().split("\n");
  for (let i = 0; i < lines.length; i++) {
    const [game, value] = lines[i].split(":");

    const dataSegments = value.trim().split(";");
    games.push({
      game: game.trim().replace("Game ", ""),
      data: dataSegments,
    });
  }
  return games;
};

const input = parseInput(readInputFile("day-02/input.txt"));

// Part 1 solution function
function part1(input) {
  //  12 red cubes, 13 green cubes, and 14 blue cubes?
  const totalRedCubes = 12;
  const totalGreenCubes = 13;
  const totalBlueCubes = 14;

  let possibleGames = 0;
  for (let i = 0; i < input.length; i++) {
    const game = input[i];
    const sets = game["data"];
    let validGame = true;

    for (const set of sets) {
      const cubes = set.split(",").map((item) => item.trim().split(" "));
      let totalRed = 0,
        totalGreen = 0,
        totalBlue = 0;

      for (const cube of cubes) {
        const [count, color] = cube;
        if (color === "red") totalRed += parseInt(count);
        if (color === "green") totalGreen += parseInt(count);
        if (color === "blue") totalBlue += parseInt(count);
      }

      if (
        totalRed > totalRedCubes ||
        totalGreen > totalGreenCubes ||
        totalBlue > totalBlueCubes
      ) {
        validGame = false;
        break;
      }
    }

    if (validGame) {
      possibleGames += parseInt(game["game"]);
    }
  }

  return possibleGames;
}

// Part 2 solution function
function part2(input) {
  let sum = 0;
  let totalRed = 1,
    totalGreen = 1,
    totalBlue = 1;

  for (let i = 0; i < input.length; i++) {
    const game = input[i]["data"];
    const sets = game.flatMap((entry) =>
      entry.split(",").map((item) => item.trim()),
    );
    for (const set of sets) {
      const draw = set.split(",").map((item) => item.trim().split(" "))[0];
      let [count, color] = draw;
      if (color === "red") {
        totalRed = Math.max(totalRed, parseInt(count));
      }
      if (color === "green") {
        totalGreen = Math.max(totalGreen, parseInt(count));
      }
      if (color === "blue") {
        totalBlue = Math.max(totalBlue, parseInt(count));
      }
    }
    sum += totalRed * totalGreen * totalBlue;

    totalRed = 1;
    totalGreen = 1;
    totalBlue = 1;
  }
  return sum;
}

// Test for part 1
const part1Test = {
  input: `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`,
  expected: 8,
};

// Test for part 2
const part2Test = {
  input: `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`,
  expected: 2286,
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
