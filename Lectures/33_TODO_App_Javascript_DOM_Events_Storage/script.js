import { getItemFromLocalStorage, saveToLocalStorage } from "./scriptLocalStoradgeHelpers.js";
import { createElement, removeElement } from "./domHelpers.js";


const input = document.querySelector("[data-text-field]");
const addTodobtn = document.querySelector("[data-add-todo-btn]");
const container = document.querySelector("[data-todo-container]");

const todoList = getItemFromLocalStorage("todos");

addTodobtn.addEventListener("click", () => {
    if (input.value.trim()) {
        todoList.push(input.value);
        input.value = "";

        saveToLocalStorage(todoList);
        render();
    }
});

const render = () => {
    container.innerHTML = "";
    todoList.forEach((todo, index) => {
        const todoElement = createElement("div", todo);
        const removeBtn = createElement("button", "Х");

        removeBtn.addEventListener("click", () => {
            removeElement(todoList, index);
            saveToLocalStorage(todoList);
            render();
        });

        todoElement.classList.add("todo-item");
        todoElement.append(removeBtn);
        container.append(todoElement);
    });
}

render();