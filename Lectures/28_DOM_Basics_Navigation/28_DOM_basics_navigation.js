// DOM - basics, navigation
/* 
DOM позволяет нам делать что угодно с элементами и их содержимым, 
но для начала нужно получить соответствующий DOM-объект.

Все операции с DOM начинаются с объекта document. Это главная «точка входа» в DOM. 
Из него мы можем получить доступ к любому узлу.
*/

// const obj = {
//     cat: "Mark",
//     dog: "Sharik"
// }

const log = console.log;
const dir = console.dir;

// Пример использования log и dir
// log(obj);
// dir(obj);


// dir(document.documentElement);  // Глобальный обьект в обьекте document обозначает сам html
// dir(document.head);  // Глобальный обьект в обьекте document обозначает тег head
// dir(document.body);  // Глобальный обьект в обьекте document обозначает тег body


// dir(document.children);  // Получение html коллекции
// dir(document.children[0].children);  // Получение html коллекции
// dir(document.body.children[0]);  // Получение html коллекции
// dir(document.body.children);  // Получение html коллекции
// log(document.body.childElementCount);  // Получение количества ребенков в html коллекции

// dir(document.body.childNodes);  // Получение "чилдренов" html ввиде списке Node (проще сказать - это что то между элементами в html)


// ============================================================
// NodeList - text, HTMLElements...
// HTML Collection - only HTMLElements
// ============================================================


// for( const child of document.body.children) {
//     log(child);  // HTML Collection - only HTMLElements. Вывод "чилдренов" html через цикл for of  
// }


// for (const childNode of document.body.childNodes) {
//     if (childNode.tagName !== "SCRIPT") {
//         dir(childNode);  // Принимает только один аргумент. Выводит элемент ввиде обьекта
//         log("child ", childNode);  // NodeList - text, HTMLElements.... Вывод "чилдренов" html через цикл for of (только тех, что не скрипті)
//     }
// }


// for( const childNode of document.body.childNodes) {
//     log(childNode);  // NodeList - text, HTMLElements.... Вывод "чилдренов" html через цикл for of
// }


const body = document.body;  // Присвоение тега body (кладем сюда ссылку на body )

// dir(body.firstChild);  // #text (первая текстовая Node)
// dir(body.firstElementChild);  // h1 (первый html элемент)

// dir(body.lastChild);  // #text (последняя текстовая Node)
// dir(body.lastElementChild);  // script (последний html элемент)


// body.firstElementChild.style.color = "green";  // Изменение цвета для первого чилд элемента
// log(body.parentElement);  // Вернет html, родитель body
// log(body.parentNode);  // Вернет node

// log(body.parentElement.parentElement);  // Вернет null как html это родитель для всех других элементов, которые есть в html
// log(body.parentNode.parentNode);  // Вернет document как html
// dir(body.parentNode.parentNode);  // Вернет document ввиде обьекта


// -----------------------Практическая задача------------------
// Нужно получить элемент h2 в переменную


// const h2 = document.querySelector('h2');
const h2 = body.children[1];
// log(h2);  // my

const h2Color = body.children[1].style.color = 'red';

log(h2.previousElementSibling);  // hello
log(h2.nextElementSibling);  // friends
log(h2.textContent);  // my

// h2.textContent += " awesome";
// h2.textContent = h2.textContent + " awesome";