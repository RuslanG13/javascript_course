// **3 задача:**

// Инвертируйте значения в массиве `numbers`. Если значение положительное, то сделайте его отрицательным 
// и наоборот. 

// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]

// ```JavaScript
//    const numbers = [1, -2, 3, -4, 5];
// ```


// Solution
const numbers = [1, -2, 3, -4, 5];
const invertNumbers = numbers.map((num) => -num);


console.log(numbers);  // [ 1, -2, 3, -4, 5 ]
console.log(invertNumbers);  // [ -1, 2, -3, 4, -5 ]