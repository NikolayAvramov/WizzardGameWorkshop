document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyup);
const gameAreas = document.querySelector(".game-area");
const displayHeight = gameAreas.clientHeight;
const displayWidth = gameAreas.clientWidth;
console.log(displayHeight);
function onKeyDown(e) {
	keys[e.code] = true;
	//console.log(keys);
}
function onKeyup(e) {
	keys[e.code] = false;
	//	console.log(keys);
}
let startPos = wizzardObj.posX + wizzardObj.width;
let ballEl = document.querySelectorAll(".fire-ball");
let timer = 1500;
function gameAction(timestamp) {
	let currentHeight = wizzardObj.posY;
	let currentWidth = wizzardObj.posX;
	const wizzardElement = document.getElementById("wizzard");
	if (keys.KeyA && currentWidth > 0) {
		wizzardObj.posX -= wizzardObj.speed;
		wizzardElement.style.left = wizzardObj.posX + "px";
	}
	if (keys.KeyS && currentHeight + wizzardObj.height < displayHeight) {
		wizzardObj.posY += wizzardObj.speed;
		wizzardElement.style.top = wizzardObj.posY + "px";
	}
	if (keys.KeyD && currentWidth + wizzardObj.width < displayWidth) {
		wizzardObj.posX += wizzardObj.speed;
		wizzardElement.style.left = wizzardObj.posX + "px";
	}
	if (keys.KeyW && currentHeight > 0) {
		wizzardObj.posY -= wizzardObj.speed;
		wizzardElement.style.top = wizzardObj.posY + "px";
	}
	if (keys.Space) {
		wizzardElement.classList.add("wizzard-fire");
		wizzardElement.classList.remove("wizzard");
		addFireBall(wizzardObj);
	} else {
		wizzardElement.classList.remove("wizzard-fire");
		wizzardElement.classList.add("wizzard");
	}
	ballEl.forEach((fireBall) => {
		if (fireBallObj.x < displayWidth) {
			fireBallObj.x += 0.5;
			console.log(fireBallObj);
			fireBall.style.left = fireBallObj.x + "px";
			console.log("sdfee");
		} else {
			fireBall.remove();
		}
	});
	console.log(timestamp);
	if (timestamp > timer) {
		timer += Math.random() * 1500;
		createBug();
	}
	document.querySelectorAll(".bug").forEach((bug) => {
		let pos = parseInt(bug.style.left);
		bug.style.left = pos - 5 + "px";
	});
	document.addEventListener("keypress", onKeyDown);
	window.requestAnimationFrame((timestamp) => gameAction(timestamp));
}
function addFireBall(wizzardObj) {
	let ball = document.createElement("div");
	ball.classList.add("fire-ball");
	ball.style.top = wizzardObj.posY + wizzardObj.height / 3 - 5 + "px";
	fireBallObj.x = wizzardObj.posX + wizzardObj.width;
	ball.style.left = fireBallObj.x + "px";
	gameArea.appendChild(ball);
}
function createBug() {
	let divBug = document.createElement("div");
	divBug.classList.add("bug");
	divBug.style.left = displayWidth - bugObj.width + "px";
	divBug.style.top =
		Math.floor(Math.random() * (displayHeight - bugObj.height)) + "px";
	gameArea.appendChild(divBug);
}
