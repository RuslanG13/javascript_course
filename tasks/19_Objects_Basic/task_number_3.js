// **3 задача:**

// Создайте объект `student`. Динамически добавьте объекту 3 свойства:
// - firstName;
// - age;
// - address;

// Свойство адрес тоже является обьектом.
// После создания, проверьте есть ли свойство `isActive` в объекте `student`. Результат проверки присвойте в переменную `checkIsActive`

// ```JavaScript
//     const student = {};
// ```


// Solution 1
const student = {};

student.firstname = "Anton";
student.age = 32;
student.address = {
    country: "Poland",
    city: "Gdansk",
    street: "Main street 999"
};

console.log(student);
// {
//   firstname: 'Anton',
//   age: 32,
//   address: { country: 'Poland', city: 'Gdansk', street: 'Main street 999' }
// }

const checkIsActive = "isActive" in student;
console.log(checkIsActive);  // false


// Solution 2
// const firstName = "Alina";
// const age = 25;
// const address = {
//     country: "Japan",
//     city: "Tokio"
// };

// const student = {
//     firstName,
//     age,
//     address
// };

// console.log(student);
// // {
// //   firstName: 'Alina',
// //   age: 25,
// //   address: { country: 'Japan', city: 'Tokio' }
// // }
// console.log(student.firstName, student.age, student.address);  // Alina 25 { country: 'Japan', city: 'Tokio' }

// const checkIsActive = "isActive" in student;

// console.log("Проверка на свойство isActive в объекте student", checkIsActive);  // Проверка на свойство isActive в объекте student false