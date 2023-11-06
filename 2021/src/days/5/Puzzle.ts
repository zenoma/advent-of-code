import Puzzle from '../../types/AbstractPuzzle';
import readFile from '../../utils/readFile';

interface Line {
	from: [number, number];
	to: [number, number];
}
function markLines(grid: number[][], lines: Line[]) {
	function increment(x: number, y: number) {
		grid[x] ||= [];
		grid[x][y] = (grid[x][y] || 0) + 1;
	}

	for (const { from, to } of lines) {
		const vel = [Math.sign(to[0] - from[0]), Math.sign(to[1] - from[1])];
		const pos = [...from];

		increment(pos[0], pos[1]);

		while (pos[0] !== to[0] || pos[1] !== to[1]) {
			pos[0] += vel[0];
			pos[1] += vel[1];

			increment(pos[0], pos[1]);
		}
	}

	return grid;
}

function parseLine(line: string): Line {
	const [startStr, endStr] = line.split(' -> ');

	return {
		from: startStr.split(',').map(Number) as [number, number],
		to: endStr.split(',').map(Number) as [number, number],
	};
}

export default class ConcretePuzzle extends Puzzle {
	public solveFirst(): string {
		const file = readFile('src/days/5/testInput.txt');

		const numbers: string[] = file.split(/\r?\n/);
		const grid: number[][] = [[]];

		const lines = numbers
			.map(parseLine)
			.filter(
				(line) => line.from[0] === line.to[0] || line.from[1] === line.to[1]
			); // Ignore diagonals
		markLines(grid, lines);

		return grid
			.reduce(
				(acc, column) => acc + column.reduce((a, p) => a + +(p >= 2), 0),
				0
			)
			.toString();
	}

	public getFirstExpectedResult(): string {
		// RETURN EXPECTED SOLUTION FOR TEST 1;
		return '5';
	}

	public solveSecond(): string {
		const file = readFile('src/days/5/testInput.txt');

		const numbers: string[] = file.split(/\r?\n/);

		const lines = numbers.map(parseLine);
		const grid = markLines([[]], lines);

		return grid
			.reduce(
				(acc, column) => acc + column.reduce((a, p) => a + +(p >= 2), 0),
				0
			)
			.toString();
	}

	public getSecondExpectedResult(): string {
		// RETURN EXPECTED SOLUTION FOR TEST 2;
		return '12';
	}

	public partOne(): string {
		const file = readFile('src/days/5/input.txt');

		const numbers: string[] = file.split(/\r?\n/);
		const grid: number[][] = [[]];

		const lines = numbers
			.map(parseLine)
			.filter(
				(line) => line.from[0] === line.to[0] || line.from[1] === line.to[1]
			); // Ignore diagonals
		markLines(grid, lines);

		return grid
			.reduce(
				(acc, column) => acc + column.reduce((a, p) => a + +(p >= 2), 0),
				0
			)
			.toString();
	}
	public partTwo(): string {
		const file = readFile('src/days/5/input.txt');

		const numbers: string[] = file.split(/\r?\n/);

		const lines = numbers.map(parseLine);
		const grid = markLines([[]], lines);

		return grid
			.reduce(
				(acc, column) => acc + column.reduce((a, p) => a + +(p >= 2), 0),
				0
			)
			.toString();
	}
}
