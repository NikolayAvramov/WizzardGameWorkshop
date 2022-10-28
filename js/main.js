const startGame = document.querySelector(".game-start");
const gameArea = document.querySelector(".game-area");
const gameOver = document.querySelector(".game-over");
const score = document.querySelector(".score");
let wizzardObj = {
	posY: Math.floor(Math.random() * 90) + "%",
	posX: Math.floor(Math.random() * 50) + "%",
};
startGame.addEventListener("click", onGameStart);
function onGameStart() {
	startGame.classList.add("hidden");
	const wizzard = document.createElement("div");
	wizzard.classList.add("wizzard");

	wizzard.style.top = wizzardObj.posY;
	wizzard.style.left = wizzardObj.posX;
	gameArea.appendChild(wizzard);

	window.requestAnimationFrame(gameAction);
}
function gameAction() {
	console.log("sdasdf");
	window.requestAnimationFrame(gameAction);
}

document.addEventListener("keydown", onKeyDown);
//document.addEventListener("keyup", onKeyUp);

function onKeyDown(e) {
	console.log(e.code);
}
