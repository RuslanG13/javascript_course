// **2 задача:**

// Напишите функцию `factorial`, для поиска факториала числа.
// P.S подробнее про факториал в в 39 уроке 2 модуля Frontender[1.0]

// ```JavaScript
//   const result = factorial(5);

//   console.log(result) // 120
// ```


// Solution 1 
const factorial = (n) => {
    if (n === 1) return 1;

    return n * factorial(n - 1);
}


const result = factorial(5);
console.log(result)  // 120


// Solution 2
const factorial2 = (n) => {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

const result2 = factorial2(5);
console.log(result2)  // 120