// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times

function findOdd(A) {
  let newArr = [];
  let number;
  A.forEach((ele) => {
    newArr = A.filter((elem) => ele === elem);
    if (newArr.length % 2 !== 0) number = newArr[0];
  });
  return number;
}
