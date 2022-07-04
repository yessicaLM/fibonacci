// 0 -> [0]
// 1 -> [0,1]
// 3 -> [0,1,1,2]
// 5 -> [0,1,1,2,3]
// 10 -> [0,1,1,2,3,5,8]

describe('Fibonacci', () => {
  it('given 0, returns [0]', () => {
    expect(fibonacciCalculator(0)).toEqual([0]);
  });
});