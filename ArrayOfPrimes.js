//wrong .....
function primes(start, end) {
  let primesArray = [];
  for (let i = start; i <= end; i++) {
    let UnPrimeCount = 0;
    //all numbers
    for (let j = 2; j < i; j++) {
      // start from 2 && j<i to remove any right number could plus one  (1,100)
      if (i % j == 0) {
        UnPrimeCount = UnPrimeCount + 1;
      }
    }
    //check if the number prime
    if (UnPrimeCount == 0) {
      console.log("prime");
      primesArray.push(i);
    }
  }
  if (primesArray.length == 0) return null;
  else return primesArray;
}
