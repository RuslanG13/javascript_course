// **2 задача:**

// У вас есть массив `colors`, который содержит названия нескольких цветов. Добавьте в конец массива новый цвет и удалите первый элемент массива. Выведите обновленный массив в консоль.

// ```JavaScript
//     const colors = ["Red", "Green", "Blue"];
// ```


// Solution
const colors = ["Red", "Green", "Blue"];
colors.push("Black");  // [ 'Red', 'Green', 'Blue', 'Black' ]
colors.shift();  // 'Red'

console.log(colors);  // [ 'Green', 'Blue', 'Black' ]