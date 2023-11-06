import Puzzle from '../../types/AbstractPuzzle';
import readFile from '../../utils/readFile';

function opositeBinary(input: string): string {
	let result = '';
	for (let index = 0; index < input.length; index++) {
		// byte = Boolean(input[index]);
		const opposite = (1 - Number(input[index])).toString();
		result = result.concat(opposite);
	}
	return result;
}

function getMostCommonBit(numbers: string[], bitIndex: number): '1' | '0' {
	let c0 = 0;
	let c1 = 0;

	for (const number of numbers) {
		const bit = number[bitIndex];
		if (bit === '1') {
			c1++;
		} else {
			c0++;
		}
	}
	return c1 >= c0 ? '1' : '0';
}

export default class ConcretePuzzle extends Puzzle {
	public solveFirst(): string {
		const file = readFile('src/days/3/testInput.txt');

		const numbers: string[] = file.split(/\r?\n/);
		let gamma = '';
		let epsilon = '';

		for (let i = 0; i < numbers[0].length; i++) {
			let ones = 0;
			let zeros = 0;

			for (const line of numbers) {
				if (line[i] === '1') {
					ones++;
				} else {
					zeros++;
				}
			}

			gamma += ones > zeros ? '1' : '0';
			epsilon += ones > zeros ? '0' : '1';
		}

		return (parseInt(gamma, 2) * parseInt(epsilon, 2)).toString();
	}

	public getFirstExpectedResult(): string {
		// RETURN EXPECTED SOLUTION FOR TEST 1;
		return '198';
	}

	public solveSecond(): string {
		const file = readFile('src/days/3/testInput.txt');

		const numbers: string[] = file.split(/\r?\n/);
		const bitCount = numbers[0].length;

		let oxygenRatings = numbers;
		for (let index = 0; index < bitCount && oxygenRatings.length > 1; index++) {
			const mostCommonBit = getMostCommonBit(oxygenRatings, index);
			oxygenRatings = oxygenRatings.filter(
				(item) => item[index] === mostCommonBit
			);
		}

		let co2ScrubberRatings = numbers;
		for (
			let index = 0;
			index < bitCount && 1 < co2ScrubberRatings.length;
			index++
		) {
			const mostCommonBit = getMostCommonBit(oxygenRatings, index);
			co2ScrubberRatings = co2ScrubberRatings.filter(
				(item) => item[index] !== mostCommonBit
			);
		}

		const oxygenRating = parseInt(oxygenRatings[0], 2);
		const co2ScrubberRating = parseInt(co2ScrubberRatings[0], 2);
		return (oxygenRating * co2ScrubberRating).toString();
	}

	public getSecondExpectedResult(): string {
		// RETURN EXPECTED SOLUTION FOR TEST 2;
		return '230';
	}

	public partOne(): string {
		const file = readFile('src/days/3/input.txt');

		const numbers: string[] = file.split(/\r?\n/);
		let gamma = '';
		let epsilon = '';

		for (let i = 0; i < numbers[0].length; i++) {
			let ones = 0;
			let zeros = 0;

			for (const line of numbers) {
				if (line[i] === '1') {
					ones++;
				} else {
					zeros++;
				}
			}

			gamma += ones > zeros ? '1' : '0';
			epsilon += ones > zeros ? '0' : '1';
		}

		return (parseInt(gamma, 2) * parseInt(epsilon, 2)).toString();
	}

	public partTwo(): string {
		const file = readFile('src/days/3/input.txt');

		const numbers: string[] = file.split(/\r?\n/);
		const bitCount = numbers[0].length;

		let oxygenRatings = numbers;
		for (let index = 0; index < bitCount && oxygenRatings.length > 1; index++) {
			const mostCommonBit = getMostCommonBit(oxygenRatings, index);
			oxygenRatings = oxygenRatings.filter(
				(item) => item[index] === mostCommonBit
			);
		}

		let co2ScrubberRatings = numbers;
		for (
			let index = 0;
			index < bitCount && 1 < co2ScrubberRatings.length;
			index++
		) {
			const mostCommonBit = getMostCommonBit(co2ScrubberRatings, index);
			co2ScrubberRatings = co2ScrubberRatings.filter(
				(item) => item[index] !== mostCommonBit
			);
		}

		const oxygenRating = parseInt(oxygenRatings[0], 2);
		const co2ScrubberRating = parseInt(co2ScrubberRatings[0], 2);
		return (oxygenRating * co2ScrubberRating).toString();
	}
}
