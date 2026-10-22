// **3 задача:**

// Создайте список.

// Для каждого пункта:

// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент `li` и добавляйте его к `ul`.
// Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши `Esc` или введя пустую строку).
// Все элементы должны создаваться динамически.

// Если пользователь вводит `HTML-теги`, они должны обрабатываться как текст.


// Solution
const ulTag = document.createElement("ul");
document.body.append(ulTag);

while (true) {
    const userData = prompt("Please, enter text for the element of the list", "");

    if (!userData) {
        break;
    }

    const liTag = document.createElement("li");
    liTag.textContent = userData;
    ulTag.append(liTag);
}