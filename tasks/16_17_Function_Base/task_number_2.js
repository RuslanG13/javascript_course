// **2 задача:**

// Напишите функцию которая возвращает случайное наибольшее число и переданных в нее чисел:

// ```JavaScript
//     function getMaxValue(num1, num2, num3, num4, num5) {}

//     console.log(getMaxValue(2, 5, 99, 23, 101))
// ```

// Solution 1
function getMaxValue(num1, num2, num3, num4, num5) {
    return Math.max(...arguments);
}

console.log(getMaxValue(2, 5, 99, 23, 101));


// Solution 2
// function getMaxValue2(num1, num2, num3, num4, num5) {
//     const valuesArray = [...arguments];
    
//     return valuesArray.sort((a, b) => b - a)[0];
// }

// console.log(getMaxValue2(2, 5, 99, 23, 101));