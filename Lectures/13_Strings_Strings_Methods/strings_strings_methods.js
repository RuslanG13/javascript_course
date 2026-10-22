// https://symbl.cc/ru/IF44D/ - Юникод (палец вверх)
// Strings (строки)

const log = console.log; // для ссылки консоль лог

let str = "Hellow World!";
str = "Hellow \nWorld!";
str = "Hellow \"World!\"";

str = "👍";
str = String.fromCodePoint(128077);

// str = "\u+1F44D"; // ошибка
str = "\u{1F44D}";
const copyRight = "\u00A9";

// log(str);
// log(copyRight);
// --------------------------------------------------

const filePath = String.raw`C:\Program Files\Docker\Docker\resources`;

// log(filePath); // C:\Program Files\Docker\Docker\resources

// --------------------------------------------------

const firstName = "Anna";

let new_str = `Hello ${firstName}`; // Template literals

new_str = `User:
    - Alex
    - Nuck
    - Julia
    - MArgarita
`
// log(new_str);

// --------------------------------------------------
// String Methods

let text = "World";

// text = text.length; // 5
// text = text.toUpperCase(); // WORLD
// text = text.toLowerCase(); // world
// text = text.repeat(5); // WorldWorldWorldWorldWorld
// text = text[2]; // r
// text = text.at(4); // d
// text = text.at(-2); // l

// log(text);
// --------------------------------------------------

let me = "I am " + text.at(1) + text.at(3) + text.at(4); // I am old

me = `I am ${text.at(1)}${text.at(3)}${text.at(4)}`; // I am old

// log(me); // I amd

// --------------------------------------------------

let new_string = "          JavaScript is awesome!            ";
// new_string = new_string.trimStart(); // (удаление пробелов с начала строки) JavaScript is awesome!            
// new_string = new_string.trimEnd(); // (удаление пробелов с конца строки)           JavaScript is awesome!
// new_string = new_string.trim(); // (удаление пробелов с оботх сторон) JavaScript is awesome! (удаление пробелов с оботх сторон)
// new_string = new_string.replace("Script", "---"); // (подмена что то на что то) Java--- is awesome!
// new_string = new_string.replace("Script", ""); // 
// new_string = new_string.indexOf('i'); // 8 index
// new_string = new_string.indexOf('Scipt'); // -1 index (если не находит такого совпадения)


// new_string = "JavaScript is awesome!";

// indexOf (как правильно проверять)
// !!!! Не правильно
// if (new_string.indexOf("Java")) { // 0 - falsy значение
//     console.log("Проверка не пройдена");
// }

// // Правильно
// if (new_string.indexOf("Java") !== -1) {
//     console.log("Проверка пройдена");
// }

// console.log(new_string);
// --------------------------------------------------

// new_string = "JavaScript is awesome!";

// new_string = new_string.includes("is"); // true
// new_string = new_string.startsWith("is"); // false
// new_string = new_string.endsWith("some!"); // true
// new_string = new_string.endsWith("some!"); // true

// console.log(new_string);
// --------------------------------------------------

// substring, slice, substr

// substring(start, end);
// slice(start, end);
// substr(start, length);

// new_string = "hardcore";

// new_string = new_string.substring(0, 4); // hard
// new_string = new_string.substring(4); // core
// new_string = new_string.substring(8, 4); // core (старт больше чем енд, то он меняет их местами будет (4, 8))

// new_string = new_string.slice(0, 4); // hard
// new_string = new_string.slice(8, 4); // ""

// Deprecated method! Do not use it!
// new_string = new_string.substr(1, 3); // ard

// console.log(new_string);
// --------------------------------------------------

let random = "abc";
// random = random.padStart("10", "0"); // 0000000abc
// random = random.padStart("10", "0").length; // 10
// random = random.padEnd("10", "0"); // abc0000000
random = random.padEnd("10", Math.random()); // abc0.10414


console.log(random);