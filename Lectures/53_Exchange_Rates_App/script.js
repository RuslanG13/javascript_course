import { formattedRate } from "./helpers.js";

const firstSelect = document.querySelector("[data-first-select]");
const secondSelect = document.querySelector("[data-second-select]");

const swapBtn = document.querySelector("[data-swap-btn]");
const comparisonInfo = document.querySelector("[data-comparison-info]");

const firstInput = document.querySelector("[data-first-input]");
const secondInput = document.querySelector("[data-second-input]");

const BASE_URL = "https://open.er-api.com/v6/latest";
const FIRST_DEFAULT_CURRENCY = "USD";
const SECOND_DEFAULT_CURRENCY = "UAH";

let rates = {};


// select events listeners
firstSelect.addEventListener("change", () => updateExchangeRates());
secondSelect.addEventListener("change", () => renderInfo());


// swap button event listener
swapBtn.addEventListener("click", () => {
    const temp = firstSelect.value;
    firstSelect.value = secondSelect.value;
    secondSelect.value = temp;

    updateExchangeRates();
});


// input events
firstInput.addEventListener("input", () => {
    secondInput.value = formattedRate(firstInput.value * rates[secondSelect.value]);
});

secondInput.addEventListener("input", () => {
    firstInput.value = formattedRate(secondInput.value / rates[secondSelect.value]);
});


// fn updateExchangeRates - update exchange rates
const updateExchangeRates = async () => {
    try {
        const response = await fetch(`${BASE_URL}/${firstSelect.value}`);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        rates = data.rates;
        renderInfo();
    } catch (error) {
        console.error(error.message);
    }
}


// fm renderInfo - render info
const renderInfo = () => {
    comparisonInfo.textContent = `1 ${firstSelect.value} = ${rates[secondSelect.value]} ${secondSelect.value}`;

    firstInput.value = rates[firstSelect.value];
    secondInput.value = rates[secondSelect.value];
}


// fn populateSelects - populate selects
const populateSelects = () => {
    firstSelect.innerHTML = "";
    secondSelect.innerHTML = "";

    for (const currency of Object.keys(rates)) {
        firstSelect.innerHTML += `
            <option value="${currency}" ${currency ===
                FIRST_DEFAULT_CURRENCY ? "selected" : ""}>${currency}</option>`;

        secondSelect.innerHTML += `
            <option value="${currency}" ${currency ===
                SECOND_DEFAULT_CURRENCY ? "selected" : ""}>${currency}</option>`;
    }
}


// getinitialRates - initial fn to populate selects
const getinitialRates = async () => {
    try {
        const response = await fetch(`${BASE_URL}/${FIRST_DEFAULT_CURRENCY}`);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        rates = data.rates;
        populateSelects();
        renderInfo();
    } catch (error) {
        console.error(error.message);
    }
}


getinitialRates();