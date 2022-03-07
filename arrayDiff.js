// Your goal is to implement a difference function, which subtracts one list from another and returns the result.

function arrayDiff(a, b) {
  const newArr = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) newArr.push(a[i]);
  }
  return newArr;
}
