document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyup);
function onKeyDown(e) {
	keys[e.code] = true;
	console.log(keys);
}
function onKeyup(e) {
	keys[e.code] = false;
	console.log(keys);
}
function gameAction() {
	const wizzardElement = document.getElementById("wizzard");
	if (keys.KeyA) {
		console.log("sdf");
		wizzardObj.posX -= wizzardObj.speed;
		wizzardElement.style.left = wizzardObj.posX + "px";
	}
	if (keys.KeyS) {
		wizzardObj.posY += wizzardObj.speed;
		wizzardElement.style.top = wizzardObj.posY + "px";
	}
	if (keys.KeyD) {
		wizzardObj.posX += wizzardObj.speed;
		wizzardElement.style.left = wizzardObj.posX + "px";
	}
	if (keys.KeyW) {
		wizzardObj.posY -= wizzardObj.speed;
		wizzardElement.style.top = wizzardObj.posY + "px";
	}
	if (keys.Space) {
		wizzardElement.classList.add("wizzard-fire");
		wizzardElement.classList.remove("wizzard");
	}
	document.addEventListener("keypress", onKeyDown);
	window.requestAnimationFrame(gameAction);
}
