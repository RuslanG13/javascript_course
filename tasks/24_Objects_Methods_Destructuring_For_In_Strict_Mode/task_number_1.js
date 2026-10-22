// **1 задача:**

// Сделайте деструктурирующие присваивание, которое:

// - свойства `years` присвоить в переменную `age`.
// - свойства `name` присвоить в переменную `name`.
// - свойства `isDeveloper` присвоить в переменную `isDeveloper` (false - если такое сво-во отсутствует).

// ```JavaScript
//    const user = {
//     years: 33,
//     name: "Alex",
//   };
// ```


// Solution
const user = {
    years: 33,
    name: "Alex",
};

const { years: age, name, isDeveloper = false } = user;

console.log(age);  // 33
console.log(name);  // Alex
console.log(isDeveloper);  // false