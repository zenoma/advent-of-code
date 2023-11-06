import Puzzle from '../../types/AbstractPuzzle';
import readFile from '../../utils/readFile';

interface Options {
	totalDays?: number;
}

export default class ConcretePuzzle extends Puzzle {
	public solveFirst(): string {
		const totalDays = 80;
		const file = readFile('src/days/6/testInput.txt');

		let fish = file.split(',').map(Number);

		for (let d = 0; d < totalDays; d++) {
			const newFish = Array(fish.length);

			for (let i = 0; i < fish.length; i++) {
				if (fish[i] <= 0) {
					newFish[i] = 6;
					newFish.push(8);
				} else {
					newFish[i] = fish[i] - 1;
				}
			}

			fish = newFish;
		}

		return fish.length.toString();
	}

	public getFirstExpectedResult(): string {
		// RETURN EXPECTED SOLUTION FOR TEST 1;
		return '5934';
	}

	public solveSecond(): string {
		const file = readFile('src/days/6/testInput.txt');
		const initialState = file.split(',').map(Number);
		const fish = Array<number>(10).fill(0);
		for (const initialFish of initialState) {
			fish[initialFish]++;
		}
		for (let d = 0; d < 256; d++) {
			// Add new fish and reset fish timers
			fish[9] += fish[0];
			fish[7] += fish[0];
			// Move other fish down a timer
			for (let i = 1; i < fish.length; i++) {
				fish[i - 1] = fish[i] || 0;
				fish[i] = 0;
			}
		}
		return Array.from(fish.values())
			.reduce((sum, fishCount) => sum + fishCount)
			.toString();
	}

	public getSecondExpectedResult(): string {
		// RETURN EXPECTED SOLUTION FOR TEST 2;
		return '26984457539';
	}

	public partOne(): string {
		const totalDays = 80;
		const file = readFile('src/days/6/input.txt');

		let fish = file.split(',').map(Number);

		for (let d = 0; d < totalDays; d++) {
			const newFish = Array(fish.length);

			for (let i = 0; i < fish.length; i++) {
				if (fish[i] <= 0) {
					newFish[i] = 6;
					newFish.push(8);
				} else {
					newFish[i] = fish[i] - 1;
				}
			}

			fish = newFish;
		}

		return fish.length.toString();
	}
	public partTwo(): string {
		const file = readFile('src/days/6/input.txt');
		const initialState = file.split(',').map(Number);
		const fish = Array<number>(10).fill(0);
		for (const initialFish of initialState) {
			fish[initialFish]++;
		}
		for (let d = 0; d < 256; d++) {
			// Add new fish and reset fish timers
			fish[9] += fish[0];
			fish[7] += fish[0];
			// Move other fish down a timer
			for (let i = 1; i < fish.length; i++) {
				fish[i - 1] = fish[i] || 0;
				fish[i] = 0;
			}
		}
		return Array.from(fish.values())
			.reduce((sum, fishCount) => sum + fishCount)
			.toString();
	}
}
