document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyup);
const gameAreas = document.querySelector(".game-area");
const displayHeight = gameAreas.clientHeight;
const displayWidth = gameAreas.clientWidth;
let bestRes = document.getElementById("best");
let currenPoint = document.getElementById("current");
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
let gameOver = false;
let timer = 1500;
let bugSpawnInterval = 0;
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
		if (timestamp > bugSpawnInterval) {
			addFireBall(wizzardObj);
			bugSpawnInterval += 500;
		}
	} else {
		wizzardElement.classList.remove("wizzard-fire");
		wizzardElement.classList.add("wizzard");
	}

	let bugEl = document.querySelectorAll(".bug");

	// render fireBall

	document.querySelectorAll(".fire-ball").forEach((fireBall) => {
		bugEl.forEach((bug) => {
			if (detectTouch(bug, fireBall)) {
				bug.remove();
				fireBall.remove();
				currenPoint.textContent = Number(currenPoint.textContent) + 10;
			}
		});
		let pos = parseInt(fireBall.style.left);
		if (pos < displayWidth) {
			fireBall.style.left = pos + 5 + "px";
		} else {
			fireBall.remove();
		}
	});
	if (timestamp > timer) {
		timer += Math.random() * 1500;
		createBug();
	}

	// render bugs

	bugEl.forEach((bug) => {
		let pos = parseInt(bug.style.left);

		if (detectTouch(wizzardElement, bug)) {
			gameOver = true;
		}
		if (pos < 0) {
			bug.remove();
		} else {
			bug.style.left = pos - 3 + "px";
		}
	});

	// set best res
	if (Number(bestRes.textContent) < Number(currenPoint.textContent)) {
		bestRes.textContent = currenPoint.textContent;
	}

	document.addEventListener("keypress", onKeyDown);
	if (gameOver) {
		gameArea.classList.add("hidden");
		gameOverArea.classList.remove("hidden");
	} else {
		window.requestAnimationFrame((timestamp) => gameAction(timestamp));
	}
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
function detectTouch(objectA, objectB) {
	let first = objectA.getBoundingClientRect();
	let second = objectB.getBoundingClientRect();
	let hasTouch = !(
		first.top > second.bottom ||
		first.bottom < second.top ||
		first.right < second.left ||
		first.left > second.right
	);
	return hasTouch;
}
