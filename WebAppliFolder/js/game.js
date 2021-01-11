const canvas = document.getElementById("canvasTest");
const ctx = canvas.getContext('2d');

let x = 0
let y = 0

let xMovement = 2;
let yMovement = 2;

const Cube_Size_x = 100;
const Cube_Size_y = 100;

var img = new Image();
img.src = 'imageFolder/Bruto.png'

function gameLoop(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(img, x, y, Cube_Size_x, Cube_Size_y);

    if(x+Cube_Size_x+xMovement >= canvas.width || x+xMovement <= 0){
        xMovement *= -1;
    }
    if(y+Cube_Size_y+yMovement >= canvas.height || y+yMovement <= 0){
        yMovement *= -1;
    }

x+=xMovement;
y+=yMovement;

}
img.onload = function(){
    setInterval(gameLoop, 1000 / 60)
}
