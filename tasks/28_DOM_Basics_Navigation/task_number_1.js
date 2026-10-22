// **1 задача:**

// Напишите код, чтобы получить

// - элемент `h2`
// - `ol`
// - второй `li` (с именем Elena)
// - третий `li` (с именем Olga)

// ```html
//     <h2>Employees:</h2>
//     <ol>
//       <li>Alex</li>
//       <li>Elena</li>
//       <li>Olga</li>
//     </ol>
// ```


// Solution

// console.log(document.firstElementChild);  // h2
console.log(document.querySelector('h2'));  // h2


console.log(document.querySelector('ol'));  // ol
// console.log(document.lastElementChild);  // ol


console.log(document.body.children[1].children[1]);  // второй `li` (с именем Elena)
// console.log(document.body.lastElementChild.children[1]);  // второй `li` (с именем Elena)


console.log(document.body.children[1].children[2]);  // третий `li` (с именем Olga)
// console.log(document.body.lastElementChild.children[1]);  // второй `li` (с именем Elena)