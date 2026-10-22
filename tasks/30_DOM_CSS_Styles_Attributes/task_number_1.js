// **1 задача:**

// Создайте элемент ссылки с помощью JS. Добавьте контент для ссылки.

// Далее добавить динамически данному элементу атрибуты:
// - `href` со значением `https://любой сайт`;
// - `target` со значением `_blank`;

// Далее присоединить элемент к `body`.

// ```JavaScript
//    const link = 
// ```


// Solution
const link = document.createElement("a");
link.textContent = "Weather Forecast";
link.href = "https://sinoptik.ua/";
link.target = "_blank";

document.body.prepend(link);