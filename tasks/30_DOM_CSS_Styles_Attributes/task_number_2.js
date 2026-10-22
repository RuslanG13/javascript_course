// **2 задача:**

// Создайте функцию `showAlert(className, message)` у которой есть два параметра `className` и `message`.
// Функция динамически создает `div` которому присваивает класс с названием `className` и добавляет
// контент `message`.
// После функция добавляет элемент в `body` в самом начале.
// Также должен быть файл `.css` где будет создан класс передаваемый в функцию `showAlert`.

// ```JavaScript
//     const showAlert = (className, message) => {}
// ```


// Solution


const showAlert = (className, message) => {
    const div = document.createElement("div");
    div.classList.add(className);
    div.textContent = message;

    document.body.prepend(div);
}

showAlert("block-c", "This is block -c!");