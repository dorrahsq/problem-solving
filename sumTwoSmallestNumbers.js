// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {
  let min1 = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min1), 1);
  let min2 = Math.min(...numbers);
  return min1 + min2;
}
