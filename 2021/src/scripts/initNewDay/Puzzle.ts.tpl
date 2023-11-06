import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    // WRITE SOLUTION FOR TEST 1
    return 'day 1 solution for test 1';
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return 'day 1 solution for test 1 ';
  }

  public solveSecond(): string {
    // WRITE SOLUTION FOR TEST 2
    return 'day 1 solution for test 2';
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return 'day 1 solution for test 2';
  }

  public partOne(): string {
    // RETURN SOLUTION FOR EXERCISE ONE;
    return 'day 1 solution 1';
  }
  public partTwo(): string {

    // RETURN SOLUTION FOR EXERCISE TWO;
    return 'day 1 solution 2';
  }
}
