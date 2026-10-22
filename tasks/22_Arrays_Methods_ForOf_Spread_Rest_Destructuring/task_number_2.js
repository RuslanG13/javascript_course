// **2 задача:**

// Отсортируйте массив `numbers` и затем его разверните.

// ```JavaScript
//     const numbers = [3, 5, 77, 81, 99, 12, 90, 119, 4];
// ```


// Solution
const numbers = [3, 5, 77, 81, 99, 12, 90, 119, 4];

const reversedNumbers = numbers.sort((a, b) => a - b).reverse();

console.log(reversedNumbers);  // [119, 99, 90, 81, 77,12,  5,  4,  3];