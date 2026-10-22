// **4 задача:**

// Удалите символы `$#@&` из строки ` $#$  Hello @$&#World! `

// ```JavaScript
//     let str = " $#$  Hello @$&#World! ";

//     console.log(str); // "Hello World"
// ```


// Solution
let str = " $#$  Hello @$&#World! ";
str = str.replaceAll("$", "").replaceAll("#", "").replaceAll("@", "").replaceAll("&", "").trim();

console.log(str); // "Hello World"


// Solution 2
// let str = " $#$  Hello @$&#World! ";
// str = str.replace(/[$#@&]/g, "").trim();

// console.log(str); // "Hello World"