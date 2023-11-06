import PuzzleFactory from './utils/PuzzleFactory';

const args = process.argv.slice(2);
const dayToSolve = args[0];

if (!dayToSolve) {
  console.error('No day specified run with npm run dev {day} {exercise}');
  process.exit(1);
}
console.log(`Solving Day #${args[0]}`);
(async () => {
  const puzzle = await PuzzleFactory.getPuzzle(args[0]);
  if (args[1] == '1') {
    console.log('Dummy example 1 -> '.concat(puzzle.solveFirst()));
    console.log('Solution part 1 -> '.concat(puzzle.partOne()));
  } else {
    console.log('Dummy example 2 -> '.concat(puzzle.solveSecond()));
    console.log('Solution part 2 -> '.concat(puzzle.partTwo()));
  }
})();
