// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

function findSenior(list) {
  let max = list[0].age;
  let newArray = [];
  list.forEach((ele) => {
    if (ele.age > max) max = ele.age;
  });
  list.filter((ele) => {
    if (ele.age == max) newArray.push(ele);
  });
  return newArray;
}
