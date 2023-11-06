import Puzzle from '../../types/AbstractPuzzle';
import readFile from '../../utils/readFile';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    const numbers: number[] = [
      199, 200, 208, 210, 200, 207, 240, 269, 260, 263,
    ];

    let count = 0;

    numbers.map((element, index) => {
      if (index != 0 && element > numbers[index - 1]) {
        count++;
      }
    });

    return count.toString();
  }

  public solveSecond(): string {
    const numbers: number[] = [
      199, 200, 208, 210, 200, 207, 240, 269, 260, 263,
    ];

    let count = 0;

    const sumWindow = (index: number, array: number[]) =>
      array[index] + array[index + 1] + array[index + 2];

    numbers.map((_element, index, array) => {
      if (
        sumWindow(index, array) < sumWindow(index + 1, array) &&
        index <= numbers.length - 1
      ) {
        count++;
      }
    });

    return count.toString();
  }

  public getFirstExpectedResult(): string {
    return '7';
  }

  public getSecondExpectedResult(): string {
    return '5';
  }

  // Solution part one
  public partOne(): string {
    const file = readFile('src/days/1/input.txt');

    const numbers: number[] = file.split(/\r?\n/).map(Number);

    let count = 0;

    numbers.map((element, index) => {
      if (index != 0 && element > numbers[index - 1]) {
        count++;
      }
    });

    return count.toString();
  }

  // Solution part two
  public partTwo(): string {
    const file = readFile('src/days/1/input.txt');

    const numbers: number[] = file.split(/\r?\n/).map(Number);

    let count = 0;

    const sumFirstWindow = (element: number, index: number, array: number[]) =>
      element + array[index + 1] + array[index + 2];

    const sumSecondWindow = (index: number, array: number[]) =>
      array[index] + array[index + 1] + array[index + 2];

    numbers.map((element, index, array) => {
      sumFirstWindow(element, index, array);

      if (
        sumFirstWindow(element, index, array) <
          sumSecondWindow(index + 1, array) &&
        index <= numbers.length - 1
      ) {
        count++;
      }
    });

    return count.toString();
  }
}
