const sequenceCalculator = (givenNumber: number): number[] => {
  let nextNumber = 0, firstNumber = 0, secondNumber = 1;
  const listOfNumbers = [];

  while (nextNumber < givenNumber) {
    listOfNumbers.push(nextNumber);
    firstNumber = secondNumber;
    secondNumber = nextNumber;
    nextNumber = firstNumber + secondNumber;
  }
  return listOfNumbers;
}

export const fibonacciCalculator = (number: number): number[] => {
  if (number === 0) return [0];
  if (number === 1) return [0, 1];

  return sequenceCalculator(number);
}