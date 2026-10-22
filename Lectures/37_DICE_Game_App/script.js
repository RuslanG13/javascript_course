import { generateRandonNumber } from './utils.js';

const gameInfo = document.querySelector("[data-game-info]");
const actionBtn = document.querySelector("[data-action-btn]");
const container = document.querySelector("[data-container]");

actionBtn.addEventListener("click", () => {
    render();
});

const render = () => {
    const player1 = generateRandonNumber();
    const player2 = generateRandonNumber();

    container.innerHTML = "";

    container.insertAdjacentHTML("afterbegin", `
            <svg class="dice dice-red">
                <use href="sprites.svg#dice-${player1}-icon"></use>
            </svg>
              <svg class="dice dice-blue">
                <use href="sprites.svg#dice-${player2}-icon"></use>
            </svg>
        `);

    if (player1 === player2) {
        gameInfo.textContent = "DRAW";
        gameInfo.style.color = "#000";
    } else if (player1 > player2) {
        gameInfo.textContent = "PLAYER 1 WINS";
        gameInfo.style.color = "#e98b8b";
    } else {
        gameInfo.textContent = "PLAYER 2 WINS";
        gameInfo.style.color = "#449fcc";
    }
}

render();