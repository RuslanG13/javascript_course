// **1 задача:**

// Создайте объект Date для даты: 13 января 2028 года, 13 часов 23 минуты. 

// ```JavaScript
//     const d = ??;

//     console.log(d); // Thu Jan 13 2028 13:23:00
// ```


// Solution 1
const d = new Date("2028-1-13 13:23").toString();

console.log(d); // Thu Jan 13 2028 13:23:00 GMT+0200 (Восточная Европа, стандартное время)


// Solution 2
const dat = new Date(2028, 0, 13, 13, 23).toString();

console.log(dat); // Thu Jan 13 2028 13:23:00 GMT+0200 (Восточная Европа, стандартное время)