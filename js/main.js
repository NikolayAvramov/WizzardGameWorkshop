const startGame = document.querySelector(".game-start");
const gameArea = document.querySelector(".game-area");
const gameOver = document.querySelector(".game-over");
const score = document.querySelector(".score");
const wizzard = document.createElement("div");

// let wizzardObj = {
// 	posY: Math.floor(Math.random() * 90) + "%",
// 	posX: Math.floor(Math.random() * 50) + "%",
// };
startGame.addEventListener("click", onGameStart);
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
