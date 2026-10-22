export const createElement = (tagName, textContent) => {
    const element = document.createElement(tagName);
    element.textContent = textContent;

    return element;
}

export const removeElement = (array, index) => {
    array.splice(index, 1);
};