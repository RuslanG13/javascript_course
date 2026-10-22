// **1 задача:**

// Напишите код для вставки `<li>2</li><li>3</li>` между этими двумя `<li>`:

// ```html
//     // <ul id="ul">
//     //     <li id="one">1</li>
//     //     <li id="two">4</li>
//     // </ul>
// // ```


// Solution
const liWithIdOne = document.querySelector('#one');

liWithIdOne.insertAdjacentHTML("afterend", '<li>2</li><li>3</li>');