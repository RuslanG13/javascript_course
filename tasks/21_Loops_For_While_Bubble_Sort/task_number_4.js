// **4 задача:**

// У вас есть массив объектов, где каждый объект представляет собой товар с полями `name` и `price`. 
// Напишите цикл `for`, который выводит только те товары, цена которых больше 100.

// ```JavaScript
//     const products = [
//         { name: 'Laptop', price: 1500 },
//         { name: 'Mouse', price: 25 },
//         { name: 'Keyboard', price: 75 },
//         { name: 'Monitor', price: 200 },
//     ];
// ```


Solution
const products = [
    { name: 'Laptop', price: 1500 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 75 },
    { name: 'Monitor', price: 200 },
];

for (let i = 0; i < products.length; i++) {
    if (products[i].price > 100) {
        console.log(products[i].name);  // Laptop, Monitor
    }
}