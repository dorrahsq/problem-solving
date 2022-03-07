// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
  arr.forEach((ele) => arr.push(parseInt(arr.splice(arr.indexOf(0), 1))));
  return arr;
};
