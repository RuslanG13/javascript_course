// **1 задача:**

// Напишите функцию `sumTo`, которая принимает входное число `n` и возвращает сумму все чисел до входного числа. 

// ```JavaScript
//   const sum1 = sumTo(5); // 1 + 2 + 3 + 4 + 5
//   const sum2 = sumTo(6); // 1 + 2 + 3 + 4 + 5 + 6
//   const sum3 = sumTo(100);

//   console.log(sum1); // 15
//   console.log(sum2); // 21
//   console.log(sum3); // 5050
// ```


// Solution
const sumTo = (n) => {
    if (n === 1) return 1;

    return n + sumTo(n - 1);
}

const sum1 = sumTo(5);  // 1 + 2 + 3 + 4 + 5
const sum2 = sumTo(6);  // 1 + 2 + 3 + 4 + 5 + 6
const sum3 = sumTo(100);

console.log(sum1);  // 15
console.log(sum2);  // 21
console.log(sum3);  // 5050