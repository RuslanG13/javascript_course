const TODOS_KEY = "todos";

export const saveTodosInLocalStorage = (todos) => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

export const getTodosFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
}

export const getDateRepresentation = (todoCreatedDate) => {
    return Intl.DateTimeFormat("ru-RU", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    }).format(todoCreatedDate);
}

export const removeTodosFromLocalStorage = () => {
    localStorage.removeItem(TODOS_KEY);
}