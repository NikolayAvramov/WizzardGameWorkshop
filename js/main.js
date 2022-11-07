const startGame = document.querySelector(".game-start");
const gameArea = document.querySelector(".game-area");
const gameOverArea = document.querySelector(".game-over");
const score = document.querySelector(".score");
const wizzard = document.createElement("div");

startGame.addEventListener("click", onGameStart);
gameOverArea.classList.add("hidden");
function onGameStart() {
	startGame.classList.add("hidden");
	wizzard.classList.add("wizzard");
	wizzard.setAttribute("id", "wizzard");
	wizzard.style.top = wizzardObj.posY + "px";
	wizzard.style.left = wizzardObj.posX + "px";
	gameArea.appendChild(wizzard);
	window.requestAnimationFrame(gameAction);
}

document.addEventListener("keypress", onKeyDown);
