// **2 задача:**

// Какой будет результат ?

// ```JavaScript
// let res;
// res = true === true; // ??
// res = 1 == true; // ??
// res = undefined == null; // ??
// res = null === undefined; // ??
// res = "true" === "false"; // ??
// res = "" == false; // ??
// res = "" == 0; // ??
// ```


// Solution
let res;
res = true === true; // true (boolean)
res = 1 == true; // true (boolean)
res = undefined == null; // true (boolean)
res = null === undefined; // fasle (boolean)
res = "true" === "false"; // false (boolean)
res = "" == false; // true (boolean)
res = "" == 0; // ?? true (boolean)

console.log(typeof res);
console.log(res);