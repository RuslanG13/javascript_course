// **3 задача:**

// Создайте массив объектов `statuses` (см пример ниже). Каждому элементу массива (т.е объекту) присвойте новое поле `message` со следующими значениями:

// - для status `Active`, message = "Активен";
// - для status `Pending`, message = "Ожидается ответ";
// - для status `Decline`, message = "Отказано";

// Далее добавьте в конец массива новый объект `{
//     id: 4,
//     status: "Complete",
//     message: "Завершено"
// }`


// Solution
const statuses = [
    { id: 1, status: "Active" },
    { id: 2, status: "Pending" },
    { id: 3, status: "Decline" },
];

statuses[0].message = "Активен";
statuses[1].message = "Ожидается ответ";
statuses[2].message = "Отказано";

statuses.push({
    id: 4,
    status: "Complete",
    message: "Завершено"
})

console.log(statuses) // [
//   { id: 1, status: 'Active', message: 'Активен' },
//   { id: 2, status: 'Pending', message: 'Ожидается ответ' },
//   { id: 3, status: 'Decline', message: 'Отказано' },
//   { id: 4, status: 'Complete', message: 'Завершено' }
// ] 