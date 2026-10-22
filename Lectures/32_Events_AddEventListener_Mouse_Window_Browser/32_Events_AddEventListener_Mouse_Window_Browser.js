// Events - события

const log = console.log;
const dir = console.dir;


const btn = document.querySelector("#btn");  // <button id="btn">Click me</button>
const block = document.querySelector("#block");  // <div class="block" id="block">Block</div>
const input = document.querySelector("input");  //  <input type="text">
const text = document.querySelector("p");
// log(btn);

// btn.onclick = () => log("The button was pressed");  // (Устаревший и неудобный метод. Сейчас не используется). 
// Появляется текст в консоли после нажатия на кнопку <Click me> => The button was pressed

//-------------------addEventListener--------------------------------------

const btnClickListener = () => {
    log("The button was pressed");  // Появляется текст в консоли после нажатия на кнопку <Click me> => The button was pressed
}

btn.addEventListener("click", btnClickListener);  // Появляется текст в консоли после нажатия на кнопку <Click me> => The button was pressed

block.addEventListener("click", () => {
    log("The block was pressed");  // Появляется текст в консоли после нажатия на div <block> => The block was pressed
});

input.addEventListener("input", () => {
    log("The user has typed something");  // Специфическое событие для тега input. Выводится текст "The user has typed something" 
    // после ввода текста в тег input 
});

// Браузерный пример
window.addEventListener("resize", () => {
    log("The size of window has been changed");  // Специфическое событие для окна браузера. Выводится "The size of window has been changed"
    // после ресайза окна в браузере
});


//-------------------removeEventListener--------------------------------------

// btn.removeEventListener("click", btnClickListener);

block.addEventListener("click", () => {
    btn.removeEventListener("click", btnClickListener);
});


//-------------------Event Object---------------------------------

input.addEventListener("input", (e) => {  // e - обьект события. Данный обьект создает браузер и записывает детали события
    log(e);
    // log(e.target); 
    dir(e.target);
    // dir(e.target.nodeName);  // INPUT (название ноды на которой случилось событие)
    dir(e.target.value);  // Значение, что введено в input [text]
});

btn.addEventListener("click", (e) => {
    log(e);
    log(e.clientX, e.clientY);  // Координаты мыши, где было нажатие по кноке (левой) [44 92]
    log(e.offsetX, e.offsetY);  // Координаты мыши, смещение относительно кнопки [109 7]
});

window.addEventListener("resize", (e) => {
    log(e);
    log(e.target.innerWidth, e.target.innerHeight);  // [794 695]
});

text.addEventListener("copy", (e) => {
    e.preventDefault();   // Запрет на копирование текста
    log("Copying is not prohibited!");
});

// window.addEventListener("beforeunload", (e) => {
//     e.preventDefault();  // Появляется модальное окно, что предупреждает пользователя, когда он покидает страницу
//     // в случает если данные могут не сохранится
// });