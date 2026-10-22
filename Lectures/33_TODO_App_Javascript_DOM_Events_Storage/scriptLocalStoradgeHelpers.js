export const getItemFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];

export const saveToLocalStorage = (data, key = "todos") => {
    localStorage.setItem(key, JSON.stringify(data));
}