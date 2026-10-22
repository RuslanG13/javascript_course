// **2 задача:**

// Преобразуйте букву `J` и `S` строки `str` в верхний регистр, чтобы получилось `JavaScript`

// ```JavaScript
//     let str = "javascript";

//     console.log(str); // "JavaScript"
// ```


// Solution
let str = "javascript";
str = str.replace('j', "J").replace("s", "S");

console.log(str); // JavaScript



// Solution 2
let str2 = "javascript";
str2 =
    str2[0].toUpperCase() +
    str2.slice(1, 4) +
    str2[4].toUpperCase() +
    str2.slice(5);

// console.log(str2); // JavaScript