// **2 задача:**

// Напишите цикл `while`, который выводит все элементы массива в обратном порядке.

// ```JavaScript
//     const fruits = ['apple', 'banana', 'cherry', 'date'];
// ```


// Solution
const fruits = ['apple', 'banana', 'cherry', 'date'];

let i = fruits.length - 1;

while (i >= 0) {
    console.log(fruits[i]);  // date, cherry, banana, apple
    i--;
}