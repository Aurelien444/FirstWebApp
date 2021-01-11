const canvas = document.getElementById("canvasTest");
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 100, 100);

let frame = 0

function gameLoop(){
    console.log(frame)
    frame += 1

}

setInterval(gameLoop, 1000 / 60)