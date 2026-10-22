// **1 задача:**

// Напишите функцию которая возвращает случайное от 1 до 100 число:

// ```JavaScript
//     function getRandomValue() {}

//     console.log(getRandomValue())
// ```


// Solution
function getRandomValue() { 
    return Math.ceil( Math.random() * 100);
}

console.log(getRandomValue());


// Solution 2
function getRandomValue2() { 
    return Math.floor(Math.random() * 100) + 1;
}

console.log(getRandomValue2());