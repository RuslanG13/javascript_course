// DOM - styles and attributes

const log = console.log;
const dir = console.dir;

document.body.style.backgroundColor = "Lightgrey";

const block = document.querySelector("#block-1");

// block.style.backgroundColor = "#123456";
// block.style.color = "#fff";
// block.style.padding = "1em";


// block.style.cssText = `
//     background-color: #123456;
//     color: #fff;
//     padding: 1em;
// `;


// block.classList.add("block");  // Добавление класса в html динамически
// log(block.classList.contains("block"));   // (true) Если нужно узнать если какой то конкретный класс на элементе
// block.classList.remove("block");  // Удаление класса с html элемента. Если класса на элементе не было, то при вызове ошибки не произойдет

// block.classList.toggle("block");  // Если метод toggle находит, что такого класса отсутствует, то он класс добавит
// block.classList.toggle("block");  // Если метод toggle находит, что такого класса присутствует, то он класс удалит

block.classList.add("block", "block--xl");
log(block.classList.contains("block"));  // true
//------------------------------------------------------------------------------------------------------------------


//=================== Как прочитать стили, которые есть на элементе ? =====================================================================

// getComputedStryle()  // Метод обьекта window

const button = document.querySelector("button");
log(button.style.color);  // Консоль отрабатывает, но возвращает пустое значение
log(button.style.backgroundColor);  // Консоль отрабатывает, но возвращает пустое значение

const buttonComputedStyles = getComputedStyle(button);  // Получение стилей в элемента, который передан внутри скобок метода getComputedStryle()

// log(buttonComputedStyles);  // Получение всех computed стилей
log(buttonComputedStyles.color);  // (rgb(0, 0, 0)) Получение значения цвета текста
log(buttonComputedStyles.backgroundColor);  // (rgb(240, 240, 240)) Получение значения цвета бекграунда

button.style.fontSize = "16px";
log(buttonComputedStyles.fontSize);  // (16px) Получение значение размера текста

log(buttonComputedStyles.paddingLeft);  // (6px) Получение левого padding
log(buttonComputedStyles.paddingRight);  // (6px) Получение правого padding
// -------------------------------------------------------------

button.style.paddingRight = `${20 + parseInt(buttonComputedStyles.paddingRight)}px`;
log(buttonComputedStyles.paddingRight);  // 26px
button.style.paddingLeft = `${20 + parseInt(buttonComputedStyles.paddingLeft)}px`;
log(buttonComputedStyles.paddingLeft);  // 26px
// ---------------------------------------------------------------


// ================getBoundingClientRect===============================================

// getBoundingClientRect()  // Функция возвращает размер элемента и его позицию относительно viewport

// viewport - часть экрана, которая показана на экране и которую мы видим

log(button.getBoundingClientRect());  // DOMRect {x: 8, y: 351.20001220703125, width: 120.98750305175781, height: 23.600000381469727, top: 351.20001220703125, …}
// log(getComputedStyle(button));
log(buttonComputedStyles.height);  // 23.6px
log(buttonComputedStyles.width);  // 120.988px
//---------------------------------------------------------------


// ============Atributes===================================================

// Как получить аттрибут
log(block.hasAttribute("id"));  // true
log(block.hasAttribute("class"));  // true
log(block.hasAttribute("href"));  // false


// Как получить значение аттрибута
log(block.getAttribute("class"));  // block block--xl
log(block.removeAttribute("id"));  // undefined

block.setAttribute("title", "Our big block!");

const link = document.createElement("a");
link.textContent = "Youtube link";
link.href = "https://www.youtube.com/shorts/6vEctn4TbjE";
link.target = "_blank";

document.body.prepend(link);
// link.qwerty = "Just for test!";
link.setAttribute("qwerty", "Just for test qwerty!");
//---------------------------------------------------------------


// ============Manipulation With Data Atributes===================================================

const product = document.getElementById("product");

log(product);
log(product.dataset);  // Получение всех data attributes
log(product.dataset.id);  // Получение конкретного data attribute product.dataset.id 123#@%45
log(product.dataset.category);  // Получение конкретного data attribute product.dataset.category electronics
log(product.dataset.produceYear);  // Получение конкретного data attribute product.dataset.produceYear <empty>

product.dataset.produceYear = 2026;
log(product.dataset.produceYear);  // Получение конкретного data attribute product.dataset.produceYear 2026
// ---------------------------------------------------------------