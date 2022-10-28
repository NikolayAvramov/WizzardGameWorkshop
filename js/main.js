const startGame = document.querySelector(".game-start");
const gameArea = document.querySelector(".game-area");
const gameOver = document.querySelector(".game-over");
const score = document.querySelector(".score");

startGame.addEventListener("click", onGameStart);
function onGameStart() {
	startGame.classList.add("hidden");
}
