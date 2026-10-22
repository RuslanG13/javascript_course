// promise

// ------------------- promise (база) --------------

// 1
// const promise = new Promise((resolve, reject) => resolve("Hello"));
// promise.then((message) => console.log(message));  // С помощью метода then код ждем, когда отработает promise


// 2
// const promise = new Promise((resolve, reject) => reject("Error!"));
// promise.then(
//     (message) => console.log(message),
//     (error) => console.error(error)
// );


// 3
// const promise = new Promise((resolve, reject) => reject(new Error("Error!")));
// promise.then(
//     (message) => console.log(message),
//     (error) => console.error(error.message)
// );


// --------------------------- then, catch, finally ------------------

// const myPromise = new Promise((resolve, reject) => {
//     // Асинхронная операция
//     setTimeout(() => {
//         const success = true;

//         if (success) {
//             resolve("The operation is success!");
//         } else {
//             reject("An error occurred!");
//         }
//     }, 2000);
// });

// myPromise
//     .then((res) => console.log(res))  // Выполняется если промис выполнился с успехом resolve
//     .catch((error) => console.log(error))  // Выполняется если промис выполнился с ошибкой reject
//     .finally(() => console.log("Operation is complete"));  // Выполнится всегда


// ------------------------ Асинхронный запрос к серверу (симуляция) ------------------

// const fetchData = () => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             const data = {
//                 id: 1,
//                 name: "Dmitry"
//             }
//             resolve(data);
//         }, 1000);
//     });
// }

// fetchData()
//     .then((data) => {
//         console.log("Received data: ", data);
//     })
//     .catch((error) => console.error(error));


// ------------------ Цепочка Promise --------------------

const step1 = new Promise((res) => setTimeout(() => res("Step 1 is completed!"), 1000));
const step2 = new Promise((res) => setTimeout(() => res("Step 2 is completed!"), 1500));
const step3 = new Promise((res) => setTimeout(() => res("Step 3 is completed!"), 2000));
const step4 = new Promise((_, rej) => setTimeout(() => rej("Step 4 is crushed!"), 1700));

// step1
//     .then((result) => {
//         console.log(result);
//         return step2;
//     })
//     .then((result) => {
//         console.log(result);
//         return step3;
//     })
//     .then((result) => {
//         console.log(result);
//         console.log("All steps are completed!");
//     })
//     .catch((error) => console.error(error));


// -------------------------- МЕТОДЫ ------------------
// ------------------------- Promise.all --------------

// Promise.all - запускается множество промисов параллельно и дожидаемся, пока все они выполнятся.

// Promise.all([step1, step2, step3])  // Чтобы отработал Promise.all нужно, чтобы все переданные промисы выполнились без ошибки. 
// Если хотя бы будет присутствовать одна ошибка, то промис выполнит catch блок 
//     .then((result) => {
//         console.log("[Promise.all]", result);
//     })
//     .catch((error) => console.error("[Promise.all]", error));

// [Promise.all] [
//   'Step 1 is completed!',
//   'Step 2 is completed!',
//   'Step 3 is completed!'
// ]

// -------------- Promise.allSettled -------------

/* 
Метод Promise.allSettled всегда ждёт завершения всех промисов. 
В массиве результатов будет:
{status:"fulfilled", value:результат} для успешных завершений,
{status:"rejected", reason:ошибка} для ошибок.
*/


// Promise.allSettled([step1, step2, step3, step4])  // Выполняет все промисы и результат собирает в массив
//     .then((result) => {
//         console.log("[Promise.allSettled]", result);
//     })
//     .catch((error) => console.error("[Promise.allSettled]", error));

// [Promise.allSettled] [
//   { status: 'fulfilled', value: 'Step 1 is completed!' },
//   { status: 'fulfilled', value: 'Step 2 is completed!' },
//   { status: 'fulfilled', value: 'Step 3 is completed!' },
//   { status: 'rejected', reason: 'Step 4 is crushed!' }
// ]


// -------------- Promise.any -------------
// Метод Promise.any всегда ждёт завершения первого промиса который выполнился успешно или
// когда все промисы reject


// Promise.any([step1, step2, step3, step4])  // Выполняет все промисы и результат собирает в массив
//     .then((results) => {
//         console.log("[Promise.any] Выполнен первый.", results);
//     })
//     .catch((error) => console.error("[Promise.any] Ошибка в одном из обещаний", error));

// [Promise.any] Выполнен первый. Step 1 is completed!


// -------------- Promise.race -------------
// Метод Promise.race всегда ждёт завершения самого первого промиса будет ли он resolve или reject.

Promise.race([step1, step2, step3, step4])
    .then((results) => {
        console.log("[Promise.race] Выполнен первый:", results);
    })
    .catch((err) => {
        console.error("[Promise.race] Ошибка в одном из обещаний:", err);
    });

// [Promise.race] Выполнен первый: Step 1 is completed!