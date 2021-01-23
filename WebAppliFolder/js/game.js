const canvas = document.getElementById("canvasTest");
const ctx = canvas.getContext('2d');

let x = 0
let y = 0
//dimension écran du support
canvas.width = document.documentElement.clientWidth || document.body.clientWidth;
canvas.height = document.documentElement.clientHeight || document.body.clientHeight;

const colors = ['#3a0ca3', '#560bad', '#e85d04', '#ffafcc', '#b5179e', '#370617', '#4cc9f0', '#ef233c']
//creation cercle
const gameObjects = []

function Init(){

for(let i = 0; i < 10; i++){
  const xc = Math.random() * canvas.width;
  const yc = Math.random() * canvas.height;
  const radius = Math.random() * 100 + 20;
  const color = colors[Math.floor(Math.random()* colors.length)]
  gameObjects.push(createCircle(xc, yc, radius, color, 3, 8))
}

}

function createCircle(x, y, radius, color, dx, dy){
  console.log(color)
  let obj = {
    x: x,
    y: y,
    radius: radius,
    color: color,
    dx: dx,
    dy: dy,
    

  };
  return obj
}


let xMovement = 2;
let yMovement = 2;

const Cube_Size_x = 100;
const Cube_Size_y = 100;

var img = new Image();
img.src = 'imageFolder/Bruto.png'

let frame = 0;

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

for(const obj of gameObjects){
  circle_draw(obj);
  
}
frame += 1

}
function handleStart(evt){
  for(const obj of gameObjects){
    obj.x += 10
    obj.y -= 10
  }
  const touches = evt.changedTouches;
  for(var i = 0; i < touches.length; i++){
    const x = touches[i].pageX
    const y = touches[i].pageY
    const r = 50
    const color = colors[Math.floor(Math.random() * colors.length)]
    gameObjects.push(createCircle(x, y, r, color))
  }
}

canvas.addEventListener("touchstart", handleStart, false)

function circle_draw(obj){
  ctx.beginPath();
  ctx.fillStyle = obj.color;
  ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}


img.onload = function(){
  Init();
    setInterval(gameLoop, 1000 / 60)
}






