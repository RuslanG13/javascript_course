// **1 задача:**

// Напишите цикл for of для вывода всех элементов массива `users`.

// ```JavaScript
//    const users = [
//     { id: 1, name: "Alex", age: 35, position: "manager" },
//     { id: 2, name: "Kate", age: 22, position: "qa" },
//     { id: 3, name: "Nikita", age: 29, position: "developer" },
//   ];
// ```


// Solution
const users = [
    { id: 1, name: "Alex", age: 35, position: "manager" },
    { id: 2, name: "Kate", age: 22, position: "qa" },
    { id: 3, name: "Nikita", age: 29, position: "developer" },
];

for (const user of users) {
    console.log(`user ${user.id} -> ${user.name} ${user.age} ${user.position}`);
}
// user 1 -> Alex 35 manager
// user 2 -> Kate 22 qa
// user 3 -> Nikita 29 developer