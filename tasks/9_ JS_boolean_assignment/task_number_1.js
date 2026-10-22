// **1 задача:**

// Что выведет код ?

// ```JavaScript
//     let value = NaN;

//     value &&= 10;
//     value ||= 20;
//     value &&= 30;
//     value ||= 40;

//     console.log(value);
// ```


// Solution
let value = NaN;

value &&= 10; // NaN
value ||= 20; // 20
value &&= 30; // 30
value ||= 40; // 30

console.log(value); // 30