// **2 задача:**

// Напишите код, чтобы получит вначале `p` а затем получить его соседей
// `h3` и `span`. 
// Далее получите текст из `h3` и `span`, поместите текст
// в переменную `greeting` и выведите в консоль.

// ```html
//   <h3>Hello</h3>
//   <p>Lorem, ipsum dolor.</p>
//   <span>World!</span>
// ```


// Solution

const p = document.querySelector('p');
//  const p = document.body.children[1];
console.log(p);  // Напишите код, чтобы получить вначале `p` 

console.log(p.previousElementSibling);  // а затем получить его соседей `h3` и `span`. 
console.log(p.nextElementSibling);  // а затем получить его соседей `h3` и `span`. 

const h3Text = document.querySelector('h3').textContent;  // Далее получите текст из `h3` и `span`, поместите текст
const spanText = document.querySelector('span').textContent;  // Далее получите текст из `h3` и `span`, поместите текст

const greeting = `${h3Text} ${spanText}`;
console.log(greeting);  // поместите текст в переменную `greeting` и выведите в консоль.