// **5 задача:**

// Напишите функцию `calcSum` которая принимает неограниченное количество целочисленных аргументов и возвращает их сумму;

// ```JavaScript
//     console.log(calcSum(1)); // 1
//     console.log(calcSum(1, 2, 3, 4, 5)); // 15
//     console.log(calcSum(1, 2, 3)); // 6
//     console.log(calcSum(1, 2, 3, 100, 200, 500, 0)); // 806
// ```


// Solution
function calcSum(...arguments) {
    return [...arguments].reduce((curr, accum) => accum += curr, 0);
}

console.log(calcSum(1));  // 1
console.log(calcSum(1, 2, 3, 4, 5));  // 15
console.log(calcSum(1, 2, 3));  // 6
console.log(calcSum(1, 2, 3, 100, 200, 500, 0));  // 806