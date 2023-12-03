/* 
   Filename: ComplexCode.js 

   This code implements a complex algorithm for finding prime numbers in a given range.
   It utilizes multiple functions for optimal performance and showcases advanced programming techniques.
*/

// Function to generate all prime numbers up to a given range
function generatePrimes(max) {
  // Create an array to store the prime numbers
  let primes = [];

  // Helper function to check if a number is prime
  function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }

    return true;
  }

  // Check numbers in the given range for primality
  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

// Function to calculate the sum of an array of numbers
function calculateSum(numbers) {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  return sum;
}

// Generate prime numbers up to 1000
let primesInRange = generatePrimes(1000);

// Calculate the sum of the prime numbers
let sumOfPrimes = calculateSum(primesInRange);

console.log("Prime numbers:", primesInRange);
console.log("Sum of prime numbers:", sumOfPrimes);

// More sophisticated code can be added here...