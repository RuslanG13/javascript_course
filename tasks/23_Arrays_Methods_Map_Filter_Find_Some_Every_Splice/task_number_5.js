// **5 задача:**

// Мы получаем с сервера массив `statusesFromServer` и нам нужно преобразовать данный массив в
// массив, но уже с моделью которая нужна для корректной отрисовки значений на фронтенде. 
// Т.е нужно сформировать новый массив, в котором поле `value` в каждом элементе массива изменить 
// на `key`, а поле `status` на `title`. При этом все значения в полях остаются прежними;

// ```JavaScript
//     const statusesFromServer = [
//       { value: 1, status: "Full time" },
//       { value: 2, status: "Part time" },
//       { value: 3, status: "On demand" },
//       { value: 4, status: "Retired" },
//     ];

//     // что должно получится
//     const mappedStatuses = [
//       { key: 1, title: "Full time" },
//       { key: 2, title: "Part time" },
//       { key: 3, title: "On demand" },
//       { key: 4, title: "Retired" },
//     ];
// ```


// Solution
const statusesFromServer = [
    { value: 1, status: "Full time" },
    { value: 2, status: "Part time" },
    { value: 3, status: "On demand" },
    { value: 4, status: "Retired" },
];

const mappedStatuses = statusesFromServer.map((status) => {
    return {
        key: status.value,
        title: status.status
    }
});

console.log(mappedStatuses);
// [
//   { key: 1, title: 'Full time' },
//   { key: 2, title: 'Part time' },
//   { key: 3, title: 'On demand' },
//   { key: 4, title: 'Retired' }
// ]