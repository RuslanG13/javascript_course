// DOM - создание, получение, добавление, удаление элементов

const log = console.log;
const dir = console.dir;


// =========================Методы DOM=========================================

// querySelector - самый универсальный, удобный и популярный метод выбора элеметов в DOM дереве
const p = document.querySelector('p');
// log(p);  // выводит как html элемент
// dir(p);  // выводит как обьект

const allPTags = document.querySelectorAll('p');
// log(allPTags);  // выводит как html коллекцию (это псевдомассив)
// log(Array.from(allPTags));  // Делает массив из псевдомассива
// dir(allPTags);  // выводит как node лист

const lastText = document.querySelector('.last-text');  // Получение последнего элемента
// const lastText = document.querySelector('p[class = "last-text"]');  // Получение последнего элемента
// const lastText = document.querySelector('[class = "last-text"]');  // Получение последнего элемента

// log(lastText);  // text 4
// -----------------------------------------------

// const firstText = document.querySelector('#first-text');  // Получение первого элемента
const firstText = document.getElementById('first-text');
// log(firstText);

// ----------------------------------

const wrapper = document.querySelector(".wrapper");
// log(wrapper);

// const firstTextWrapper = wrapper.getElementById('first-text');  // Тут будет ошибка. Не работает при такой вложености. Только с корня document
const firstTextWrapper = wrapper.querySelector('#first-text');  // Через querySelector найдет элемент независимо от степени вложености
// log(firstTextWrapper);
// ----------------------------------


//===============================================

// getElementsBy* - возвращают живые коллекции, но лучше использовать querySelector
// !!!!!! Методы getElements - работают только через document (с корневого родительского элемента)

const allTexts = document.getElementsByTagName('p');
// log(allTexts);  // Получаем HTML коллекцию

// allTexts.forEach(element => log(element));  // Будет ошибка как это не массив, а псевдо-массив
// const arrayAllText = Array.from(allTexts).forEach(element => log(element));  // Тут элементы выведутся в консоль. Как это уже массив
// ------------------------------------------------------


//===============================================

// log(wrapper.textContent);  // Получение текста элемента
//   text 1
//   text 2
//   text 3
//   text 4

// log(wrapper.innerHTML);  // Получение текста элемента + теги в html
//       <p id="first-text">text 1</p>
//       <p>text 2</p>
//       <p>text 3</p>
//       <p class="last-text">text 4</p>

// log(wrapper.outerHTML);  // Получение текста элемента + теги в htm + сам элемент на котором вызываем свойство .outerHTML 
// <div class="wrapper">
//   <p id="first-text">text 1</p>
//   <p>text 2</p>
//   <p>text 3</p>
//   <p class="last-text">text 4</p>
// </div>


// wrapper.textContent = "hello!";  // Все внутри перечеркиваем новым присвоением текста

// wrapper.innerHTML = "<h2>Text from JS!</h2>";  // Все внутри перечеркиваем новым присвоением html кода
// wrapper.innerHTML = wrapper.innerHTML +  "<h2>Text from JS!</h2>";  // Кейс, когда не нужно перетирать старые данные html и добавить новые

// wrapper.prepend("text with prepand");  // Добавит текст перед всем контентом внутри тега, на котором вызываем метод
// wrapper.append("text with append");  // Добавит текст вконце после всего контента внутри тега, на котором вызываем метод

// wrapper.before("text with before");  // Добавит текст перед тегом на котором вызываем метод before
// wrapper.after("text with after");  // Добавит текст после тега на котором вызываем метод after

// wrapper.append("<h2>Text from JS!</h2>");  // Этот метод НЕ парсит html тег, а добавляет его как текст


// Как создать элемент с помощью JavaScript

// const h2 = document.createElement("h2");
// h2.textContent = "Our created h2";
// wrapper.append(h2);  // Юез "" добавит элемент как элемент, а не текст
// log(h2);

// lastText.innerHTML = "";  // Очищает контент внутри тега на котором вызван метод (значение между открывающи и закрывающим тегом)
// lastText.remove();  // Удаление элемента на странице
//------------------------------------------------------


//=========insertAdjacentHTML/Text/Element======================================

const container = document.querySelector(".container");
log(container);

const h3 = document.createElement("h3");
h3.textContent = "Our created h3";
log(h3);


//----beforebegin, afterbegin, beforeend, afterend ---------------

const copiedContainer = container;

container.insertAdjacentText("beforebegin", "1) текст над контейнером");
container.insertAdjacentText("afterbegin", "2) текст вначале в контейнера");
container.insertAdjacentText("beforeend", "3) текст вконце в контейнера");
container.insertAdjacentText("afterend", "4) текст после контейнера");

const buttonID = "123"

container.insertAdjacentHTML("afterbegin", `
    <hr>
    <button id="${buttonID}">Click me!</button>
    <hr>
`);
//------------------------------------------------------


//========================================================

log(copiedContainer === container);  // true
// log(copiedContainer.textContent, container.textContent);

const deepCopiedContainer = container.cloneNode(true);

// log(deepCopiedContainer);
log(deepCopiedContainer === container);  // false