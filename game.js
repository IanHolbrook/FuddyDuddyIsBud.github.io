var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

function gameLoop() {
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

ctx.fillStyle = "red";
ctx.fillRect(0,0, canvas.clientWidth, canvas.height);

canvas.addEventListener("click", function(event) {

})

function HandleUserInput(event) {

}

function drawCharacter(x,y) {
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, 50, 50)
}