// **1 задача:**

// Напиши функцию `createCounter`, которая принимает начальное значение `start` и возвращает функцию. 
// При каждом вызове этой функции возвращается текущее значение счётчика, увеличенное на 1.

// ```JavaScript
//   const counter = createCounter(5);

//   console.log(counter()); // 6
//   console.log(counter()); // 7
//   console.log(counter()); // 8
// ```


// Solution
const createCounter = (start) => {
    let count = start;
    
    return () => {
        return count += 1;
    }
}

const counter = createCounter(5);

console.log(counter());  // 6
console.log(counter());  // 7
console.log(counter());  // 8