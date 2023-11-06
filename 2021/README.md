# 🎄 AdventOfCode 🎄

## 🚀 Getting started

install all required dependencies with `npm i`

## 🎄 Adding a new puzzle

when the new AoC puzzle is available run `npm run init-day {day} `

replace `{day}` with the number of the advent day i.e. `npm run init-day 2`.

This command will create a new directory in the `days` folder with the following content

- `Puzzle.ts`: the boilerplate class with the placeholder methods for solving both daily puzzles
- `index.txt`: the input file where to add the puzzle input

In each method of the class you can access the test input with `this.input`

## 🔧 Development

When your solution is ready, or when you want to start developing incrementally run `npm run dev {day} {exercise}` where `{day}` is the day you are working on and `{exercise}` with the number of the parte (1 or 2), , i.e. `npm run dev 1 2` will run the puzzle class for day 1 and exercise 2.

## 🧪 Testing

You can ran test for all puzzles agains their expected output with `npm t` this will test all the solutions in the `days` folder
