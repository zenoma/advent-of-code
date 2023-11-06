import Puzzle from '../../types/AbstractPuzzle';
import readFile from '../../utils/readFile';

export default class ConcretePuzzle extends Puzzle {
	public solveFirst(): string {
		const file = readFile('src/days/7/testInput.txt');
		const crabs = file.split(',').map(Number);
		const fuelConsumptions: number[] = [];

		const min = Math.min(...crabs);
		const max = Math.max(...crabs);

		for (let i = min; i <= max; i++) {
			let totalFuel = 0;

			for (const crab of crabs) {
				totalFuel += Math.abs(i - crab);
			}

			fuelConsumptions.push(totalFuel);
		}

		return Math.min(...fuelConsumptions).toString();
	}

	public getFirstExpectedResult(): string {
		// RETURN EXPECTED SOLUTION FOR TEST 1;
		return '37';
	}

	public solveSecond(): string {
		const file = readFile('src/days/7/testInput.txt');
		const crabs = file.split(',').map(Number);
		const fuelConsumptions: number[] = [];

		const min = Math.min(...crabs);
		const max = Math.max(...crabs);

		for (let i = min; i <= max; i++) {
			let totalFuel = 0;

			for (const crab of crabs) {
				let fuelRate = 1;
				const distance = Math.abs(i - crab);

				for (let i = 0; i < distance; i++) {
					totalFuel += fuelRate;
					fuelRate++;
				}
			}

			fuelConsumptions.push(totalFuel);
		}

		return Math.min(...fuelConsumptions).toString();
	}

	public getSecondExpectedResult(): string {
		// RETURN EXPECTED SOLUTION FOR TEST 2;
		return '168';
	}

	public partOne(): string {
		const file = readFile('src/days/7/input.txt');
		const crabs = file.split(',').map(Number);
		const fuelConsumptions: number[] = [];

		const min = Math.min(...crabs);
		const max = Math.max(...crabs);

		for (let i = min; i <= max; i++) {
			let totalFuel = 0;

			for (const crab of crabs) {
				totalFuel += Math.abs(i - crab);
			}

			fuelConsumptions.push(totalFuel);
		}

		return Math.min(...fuelConsumptions).toString();
	}
	public partTwo(): string {
		const file = readFile('src/days/7/input.txt');
		const crabs = file.split(',').map(Number);
		const fuelConsumptions: number[] = [];

		const min = Math.min(...crabs);
		const max = Math.max(...crabs);

		for (let i = min; i <= max; i++) {
			let totalFuel = 0;

			for (const crab of crabs) {
				let fuelRate = 1;
				const distance = Math.abs(i - crab);

				for (let i = 0; i < distance; i++) {
					totalFuel += fuelRate;
					fuelRate++;
				}
			}

			fuelConsumptions.push(totalFuel);
		}

		return Math.min(...fuelConsumptions).toString();
	}
}
