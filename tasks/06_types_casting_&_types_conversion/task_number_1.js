// **1 задача:**

// Какой будет результат ?

// ```JavaScript
// let val;
// val = 5 + '5'; // ??
// val = 2 * '2'; // ??
// val = 20 / '10'; // ??
// val = true + true; // ??
// val = false + true; // ??
// ```


// Solution
let val;
val = 5 + '5'; // '55' string
val = 2 * '2'; // 4 number
val = 20 / '10'; // 2 number
val = true + true; // 2 number
val = false + true; // 1 number

console.log(typeof val);
console.log(val);