// **2 задача:**

// Склад товаров
// Создай функцию `createStore`, которая принимает строку `item` и возвращает объект с двумя методами:

//  - add: добавляет единицу товара на склад.
//  - getCount: возвращает текущее количество товара на складе.

// ```JavaScript
//   const store = createStore('Apples');

//   store.add();
//   store.add();
//   console.log(store.getCount()); // 2
//   store.add();
//   console.log(store.getCount()); // 3
// ```


// Solution
const createStore = (item) => {
    let count = 0;

    return {
        add: () => {
            count++;
        },
        getCount: () => {
            return count;
        }
    }
}

const store = createStore("Apples");

store.add();
store.add();
console.log(store.getCount());  // 2
store.add();
console.log(store.getCount());  // 3






// const store = createStore('Apples');

// store.add();
// store.add();
// console.log(store.getCount()); // 2
// store.add();
// console.log(store.getCount()); // 3