//to check given number is prime or not in javascript
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  const myNumber = 17;
  if (isPrime(myNumber)) {
    console.log("prime number");
  } else {
    console.log("not a prime number");
  }