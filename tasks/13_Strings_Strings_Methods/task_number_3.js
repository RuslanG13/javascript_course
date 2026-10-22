// **3 задача:**

// Напишите простейшую проверку комментариев на стоп слово `fuck` и присвойте результат в `boolean` формате в переменную `isBlockedComment`

// ```JavaScript
//     const comment1 = "Hello man! Fuck you!";
//     const comment2 = "Hello man! thank you!";
//     const comment3 = "Hello man! thank you, fuck!";

//     let isBlockedComment1;
//     let isBlockedComment2;
//     let isBlockedComment3;

//     console.log(isBlockedComment1); // true or false
//     console.log(isBlockedComment2); // true or false
//     console.log(isBlockedComment3); // true or false
// ```


// Solution
// const comment1 = "Hello man! Fuck you!";
// const comment2 = "Hello man! thank you!";
// const comment3 = "Hello man! thank you, fuck!";

// let isBlockedComment1 = comment1.toLowerCase().includes("fuck");
// let isBlockedComment2 = comment2.toLowerCase().includes("fuck");
// let isBlockedComment3 = comment3.toLowerCase().includes("fuck");

// console.log(isBlockedComment1); // true
// console.log(isBlockedComment2); // false
// console.log(isBlockedComment3); // true

// Solution 2
// const comment1 = "Hello man! Fuck you!";
// const comment2 = "Hello man! thank you!";
// const comment3 = "Hello man! thank you, fuck!";

// isBlockedComment1 = comment1.toLowerCase().indexOf("fuck") !== -1;
// isBlockedComment2 = comment2.toLowerCase().indexOf("fuck") !== -1;
// isBlockedComment3 = comment3.toLowerCase().indexOf("fuck") !== -1;

// console.log(isBlockedComment1); // true
// console.log(isBlockedComment2); // false
// console.log(isBlockedComment3); // true