export const fibonacciCalculator = (number: number): number[] => {
  if (number === 0) return [0];
  if (number === 1) return [0, 1];

  let totalSum = 0;
  let numbA = 0;
  let numbB = 1;
  const listOfNumbers = [];

  while(totalSum < number) {
    listOfNumbers.push(totalSum);
    numbA = numbB;
    numbB = totalSum;
    totalSum = numbA + numbB;
  }
  return listOfNumbers;
}