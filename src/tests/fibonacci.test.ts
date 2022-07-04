import { fibonacciCalculator } from '../core/fibonacci';

// 0 -> [0] --> DONE
// 1 -> [0,1] --> DONE
// 3 -> [0,1,1,2] --> DONE
// 5 -> [0,1,1,2,3] --> DONE
// 10 -> [0,1,1,2,3,5,8]


describe('Fibonacci', () => {
  it('given 0, returns [0]', () => {
    const givenValue = 0;
    const expectedValue = [0];

    expect(fibonacciCalculator(givenValue)).toEqual(expectedValue);
  });

  it('given 1, returns [0, 1]', () => {
    const givenValue = 1;
    const expectedValue = [0, 1];

    expect(fibonacciCalculator(givenValue)).toEqual(expectedValue);
  });

  it('given 3, returns [0, 1, 1, 2]', () => {
    const expectedValue = [0, 1, 1, 2];
    const givenValue = 3;

    expect(fibonacciCalculator(givenValue)).toEqual(expectedValue);
  });

  it('given 5, returns [0,1,1,2,3]', () => {
    const expectedValue = [0, 1, 1, 2, 3];
    const givenValue = 5;
    
    expect(fibonacciCalculator(givenValue)).toEqual(expectedValue);
  });

  it('given 10, returns [0,1,1,2,3,5,8]', () => {
    const expectedValue = [0,1,1,2,3,5,8];
    const givenValue = 10;

    expect(fibonacciCalculator(givenValue)).toEqual(expectedValue);
  });
});