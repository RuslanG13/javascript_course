// **1 задача:**

// Преобразуйте первую букву строки `str` в верхний регистр, чтобы получилось `Javascript`

// ```JavaScript
//     let str = "javascript";

//     console.log(str); // "Javascript"
// ```


// Solution
let str = "javascript";
str = str[0].toLocaleUpperCase() + str.slice(1);

// console.log(str); // Javascript


// Solution 2
// Solution
let str2 = "javascript";
str2 = str2.replace("j", "J");

console.log(str2); // Javascript