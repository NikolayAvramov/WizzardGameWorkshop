document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyup);
const gameAreas = document.querySelector(".game-area");
const displayHeight = gameAreas.clientHeight;
const displayWidth = gameAreas.clientWidth;
console.log(displayHeight);
function onKeyDown(e) {
	keys[e.code] = true;
	console.log(keys);
}
function onKeyup(e) {
	keys[e.code] = false;
	console.log(keys);
}
function gameAction() {
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
	} else {
		wizzardElement.classList.remove("wizzard-fire");
		wizzardElement.classList.add("wizzard");
	}
	document.addEventListener("keypress", onKeyDown);
	window.requestAnimationFrame(gameAction);
}
