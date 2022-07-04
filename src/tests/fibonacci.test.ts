import { fibonacciCalculator } from '../core/fibonacci';

// 0 -> [0] --> DONE
// 1 -> [0,1] --> DONE
// 3 -> [0,1,1,2]
// 5 -> [0,1,1,2,3]
// 10 -> [0,1,1,2,3,5,8]


describe('Fibonacci', () => {
  it('given 0, returns [0]', () => {
    expect(fibonacciCalculator(0)).toEqual([0]);
  });

  it('given 1, returns [0, 1]', () => {
    expect(fibonacciCalculator(1)).toEqual([0, 1]);
  });

  it('given 3, returns [0, 1, 1, 2]', () => {
    expect(fibonacciCalculator(3)).toEqual([0, 1, 1, 2]);
  });
});