// **6 задача:**

// Напишите функцию `combineArrays` которая объединяет любое количество переданных в нее массивов, и 
// далее функция преобразовывает итоговый массив в строку и возвращает ее;

// ```JavaScript
//     combineArrays([1], [2,3], [4,5,6]); // 1,2,3,4,5,6
//     combineArrays(["Hello"], ["friends", "!"], [4,5,6], [99, "=)"]); // Hello,friends,!,4,5,6,99,=)
// ```


// Solution 1
const combineArrays = (...arrays) => {
    return [...arrays].flat(Infinity).join();
}

console.log(combineArrays([1], [2, 3], [4, 5, 6]));  // 1,2,3,4,5,6
console.log(combineArrays(["Hello"], ["friends", "!"], [4, 5, 6], [99, "=)"]));  // // Hello,friends,!,4,5,6,99,=)


// Solution 2
const combineArrays2 = (...arrays) => {
    const newArray = [];

    for (let i = 0; i < arrays.length; i++) {
        newArray.push(...arrays[i]);
    }

    return newArray.join();
}

console.log(combineArrays2([1], [2, 3], [4, 5, 6]));  // 1,2,3,4,5,6
console.log(combineArrays2(["Hello"], ["friends", "!"], [4, 5, 6], [99, "=)"]));  // Hello,friends,!,4,5,6,99,=)