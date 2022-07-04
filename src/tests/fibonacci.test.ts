import { fibonacciCalculator } from '../core/fibonacci';

// 0 -> [0] --> DONE
// 1 -> [0,1]
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
});