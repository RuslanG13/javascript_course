// **2 задача:**

// Создайте функцию `clear(elem)`, которая удаляет всё содержимое из `elem`.

// ```html
// {/* <ol id="elem">
//     <li>Привет</li>
//     <li>Мир</li>
// </ol> */}
// ```


// Solution 1
const olElem = document.querySelector('#elem');

const clear = (elem) => {
    let clearedElem = elem.innerHTML = "";
    return clearedElem;
}

clear(olElem);


// Solution 2
// const olElem = document.querySelector('#elem');

// const clear = (elem) => {
//     while (elem.firstChild) {
//         elem.firstChild.remove();
//     }
// }

// clear(olElem);