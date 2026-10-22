// **2 задача:**

// Что выведет код ?

// ```JavaScript
//     let city = null;

//     city ??= "Берлин";
//     city ??= null;
//     city ??= "Кёльн";
//     city ??= "Гамбург";

//     console.log(city);
// ```


// Solution
let city = null;

city ??= "Берлин"; // "Берлин"
city ??= null; // "Берлин"
city ??= "Кёльн"; // "Берлин"
city ??= "Гамбург"; // "Берлин"

console.log(city); // "Берлин"