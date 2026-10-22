// Window, DOM, BOM, Browser API
// Про то, что такое API рассказывал тут https://youtu.be/_rgP5r08EXs

const log = console.log;
/*
Объект window поддерживается всеми браузерами. Он представляет собой окно браузера.

Все глобальные объекты, функции и переменные JavaScript автоматически становятся членами объекта window.

Глобальные переменные - это свойства объекта window.
Глобальные функции - это методы объекта window.
*/


//---------------------BROWSER API---------------


//-------------BOM (Browser Object Model)--------


// Обьектная модель браузера (BOM) позволяет JavaScript "общаться" с браузером

// log(window);  // основной обьект браузера
// log(window.innerHeight);  // 695 (высота экрана пользователя)
// log(window.innerWidth);  // 238 (ширина экрана пользователя)


// window.open();  // Открытие окна браузера
// window.open("https://google.com");  // Открытие окна с конкретным адресом
// window.open("https://google.com", "_blank" );  // Открытие окна браузера в новой вкладке
// window.open("https://google.com", "_self" );  // Открытие окна браузера в текущей вкладке
// window.close();  // Закрытие окна браузера


//-----------------------------------------
// Объект window.screen содержит информацию об экране пользователя.
// window.screen может быть записан без префикса window. (необязательно писать основной обьект window (кроме методов open и close))

// log(screen.width);  // 1536 ширина
// log(screen.height);  // 864 высота
// log(screen.pixelDepth);  // 24 глубина пикселей
//---------------------------------------------


// Объект window.location можно использовать для получения адреса текущей страницы (URL)
// и для перенаправления браузера на новую страницу.

// log(location.href);  // http://127.0.0.1:5500/Lectures/index.html (адрес url)
// log(location.hostname);  // 127.0.0.1 (host name)
// log(location.pathname);  // /Lectures/index.html (все, что идет после /, после host name)
// log(location.protocol);  // http: (протокол, что используется)
//---------------------------------------------


// Объект window.navigator содержит информацию в браузере пользователя

// log(navigator);  // Обьект navigator в глобальном обьекте window
// log(navigator.userAgent);  // Информация об userAgent браузера пользователя 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36'
// log(navigator.userAgentData);  // Более детальная информация об userAgent браузера пользователя
// В браузере Safari метод navigator.userAgentData !!!!!!!!!!!!!НЕ РАБОТАЕТ
// log(navigator.geolocation);  // Получение геолокации браузера пользователя
// log(navigator.language);  // Получение языка браузера пользователя 'uk'
//-----------------------------------------------------------


// Объект window.history содержит историю браузера

// log(history);  // Обьект history в глобальном обьекте window
// log(history.back());  // Аналог кнопки в браузере назад <-
// log(history.forward());  // Аналог кнопки в браузере вперед ->
//-----------------------------------------------------------


// ---------------------alerts--------------------------------

// window.alert("Это алерт!!!");  // Отображает alert на странице


//-------------------DOM (Document Object Model)--------------

// DOM - это представление всей страницы как объекта.
// Объект document - основная «входная точка».
// С его помощью мы можем что-то создавать или менять на странице.

// log(window.document);
// log(window.document)  // Получение обьекта документа в DOM
// log(document)  // Получение обьекта документа в DOM

// console.dir(document);  // Используется для правильного отображения обьекта DOM 
// как два верхних не всегда могут вернуть обьекта
// console.dir(document.body);  // Получение body документа (html page)
// console.dir(document.head);  // Получение head документа (html page)
// console.dir(document.head.innerHTML);  // Получение текста от обьекта head

// document.body.style.backgroundColor = "lightsalmon";  // Установка бекграунда для body


// --------------------- JavaScript ---------------------
// log(window.Array.prototype);  // Получение свойств массива
// log(window.Object.prototype);  // Получение свойств обьекта
// log(Array.prototype);  // Получение свойств массива