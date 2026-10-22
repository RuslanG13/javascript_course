// **2 задача:**

// Преобразуйте число `12345` в масссив цифр из данного числа в обратном порядке
// `12345 => [5, 4, 3, 2, 1]`.

// ```JavaScript
//   const num = 12345;
// ```


// Solution 1
const num = 12345;
const numReversedArray = num.toString().split("").map(Number).reverse();


console.log(numReversedArray);  // [ 5, 4, 3, 2, 1 ]


// Solution 2
// const num = 12345;
// const numReversedArray2 = Array.from(String(num), Number).reverse();

// console.log(numReversedArray2);  // [ 5, 4, 3, 2, 1 ]