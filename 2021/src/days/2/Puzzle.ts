import { Parser } from 'prettier';
import Puzzle from '../../types/AbstractPuzzle';
import readFile from '../../utils/readFile';

const parse = (s: string) =>
	s.split('\n').map((s) => {
		const [direction, distance] = s.split(' ');
		return [direction, parseInt(distance)] as [string, number];
	});

export default class ConcretePuzzle extends Puzzle {
	public solveFirst(): string {
		const course: { command: string; distance: number }[] = [
			{ command: 'forward', distance: 5 },
			{ command: 'down', distance: 5 },
			{ command: 'forward', distance: 8 },
			{ command: 'up', distance: 3 },
			{ command: 'down', distance: 8 },
			{ command: 'forward', distance: 2 },
		];

		let horizontal = 0;
		let depth = 0;

		course.forEach((item) => {
			switch (item.command) {
				case 'forward':
					horizontal += item.distance;
					break;
				case 'down':
					depth += item.distance;
					break;
				case 'up':
					depth -= item.distance;
					break;
				default:
					console.log('Command not recognized.');
					break;
			}
		});

		return (horizontal * depth).toString();
	}

	public getFirstExpectedResult(): string {
		// RETURN EXPECTED SOLUTION FOR TEST 1;
		return '150';
	}

	public solveSecond(): string {
		const course: { command: string; distance: number }[] = [
			{ command: 'forward', distance: 5 },
			{ command: 'down', distance: 5 },
			{ command: 'forward', distance: 8 },
			{ command: 'up', distance: 3 },
			{ command: 'down', distance: 8 },
			{ command: 'forward', distance: 2 },
		];

		let horizontal = 0;
		let depth = 0;
		let aim = 0;

		course.forEach((item) => {
			switch (item.command) {
				case 'forward':
					horizontal += item.distance;
					depth += aim * item.distance;
					break;
				case 'down':
					aim += item.distance;
					break;
				case 'up':
					aim -= item.distance;
					break;
				default:
					console.log('Command not recognized.');
					break;
			}
		});

		return (horizontal * depth).toString();
	}

	public getSecondExpectedResult(): string {
		// RETURN EXPECTED SOLUTION FOR TEST 2;
		return '900';
	}

	public partOne(): string {
		const file = readFile('src/days/2/input.txt');

		const course = parse(file);

		let horizontal = 0;
		let depth = 0;

		course.forEach(([direction, distance]) => {
			switch (direction) {
				case 'forward':
					horizontal += distance;
					break;
				case 'down':
					depth += distance;
					break;
				case 'up':
					depth -= distance;
					break;
				default:
					console.log('Command not recognized.');
					break;
			}
		});

		return (horizontal * depth).toString();
	}
	public partTwo(): string {
		const file = readFile('src/days/2/input.txt');

		const course = parse(file);

		let horizontal = 0;
		let depth = 0;
		let aim = 0;

		course.forEach(([direction, distance]) => {
			switch (direction) {
				case 'forward':
					horizontal += distance;
					depth += aim * distance;
					break;
				case 'down':
					aim += distance;
					break;
				case 'up':
					aim -= distance;
					break;
				default:
					console.log('Command not recognized.');
					break;
			}
		});

		return (horizontal * depth).toString();
	}
}
