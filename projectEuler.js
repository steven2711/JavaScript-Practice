//////////// Multiples of 3 and 5 ///////////////

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter
// value number.

// function multiplesOf3and5(number) {
//   let threeMultiple = 0;
//   let fiveMultiple = 0;

//   for (let i = 0; i < number; i++) {

//     if (i % 3 === 0) {
//       threeMultiple += i;
//     } else if (i % 5 === 0) {
//       fiveMultiple += i;
//     }
//   }

//   return threeMultiple + fiveMultiple;
// }

// console.log(multiplesOf3and5(1000));

/////////// Even Fibonacci Numbers ////////////

// By considering the terms in the Fibonacci sequence whose values do
// not exceed nth term, find the sum of the even-valued terms.

// function fiboEvenSum(n) {
//   let fibStart = [1, 2];
//   let evenSum = 2;

//   while (fibStart.length <= n) {
//     let newFib = fibStart[fibStart.length - 1] + fibStart[fibStart.length - 2];
//     if (newFib % 2 === 0) {
//       evenSum += newFib;
//     }
//     fibStart.push(newFib);
//   }

//   return evenSum;
// }

// console.log(fiboEvenSum(20));