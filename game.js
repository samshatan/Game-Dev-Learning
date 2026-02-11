const canvas = document.getElementById("gameCanvas");
const brush = canvas.getContext("2d");

const brickrow = 4;
const brickcolumn = 7;
const brickWidth = 90;
const brickHeight = 30;
const brickPadding = 20;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
let score = 0;

const bricks = [];
for(let c=0;c<brickcolumn;c++){
  bricks[c] = [];
  for(let r=0;r<brickrow;r++){
    bricks[c][r] = {x:0,y:0,status:1};
  }
}

let x = 100;
let y = 350;
const paddleHeight = 20;
const paddleWidth = 100;
let paddleX = (canvas.width-paddleWidth)/2;
let paddleY = (canvas.height-paddleHeight);

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

let dx = 1;
let dy = 1;

function draw() {
  brush.clearRect(0,0, canvas.clientWidth, canvas.height);

  drawBricks();

  brush.fillStyle = 'yellow';
  brush.fillRect(x,y,10,10);

  brush.fillStyle = "blue";
  brush.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);


  checkCollision();
  collisionDetection();

  if(rightPressed && paddleX < canvas.width-paddleWidth){
    paddleX += 4;
  }
  else if(leftPressed && paddleX > 0){
    paddleX -= 4;
  }
  else if(upPressed && paddleY > 0){
    paddleY -= 4;
  }
  else if(downPressed && paddleY < canvas.height-paddleHeight){
    paddleY += 4;
  }

  if(x+10>canvas.width || x<0){
    dx = -dx;
  }
  if(y < 0) {
    dy = -dy;
  }
  else if(y+10>canvas.height){
    alert("Game Over");
    document.location.reload();
    return;
  }
  x = x+dx;
  y = y+dy;

  drawScore();

  requestAnimationFrame(draw);
}

document.addEventListener("keydown",keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
  if(e.key === "Right" || e.key === "ArrowRight" || e.key === "d"){
    rightPressed = true;
  }
  else if(e.key === "Left" || e.key === "ArrowLeft" || e.key === "a"){
    leftPressed = true;
  }
  else if(e.key === "Up" || e.key === "ArrowUp" || e.key === "w"){
    upPressed = true;
  }
  else if(e.key === "Down" || e.key === "ArrowDown" || e.key === "s"){
    downPressed = true;
  }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight" || e.key === "d") {
        rightPressed = false; 
    }
    else if (e.key === "Left" || e.key === "ArrowLeft" || e.key === "a") {
        leftPressed = false; 
    }
    else if (e.key === "Up" || e.key === "ArrowUp" || e.key === "w") {
        upPressed = false; 
    }
    else if (e.key === "Down" || e.key === "ArrowDown" || e.key === "s") {
        downPressed = false; 
    }
}


function checkCollision(){
  if (
        x < paddleX + paddleWidth &&  // Ball's left < Paddle's right
        x + 10 > paddleX &&           // Ball's right > Paddle's left
        y < paddleY + paddleHeight && // Ball's top < Paddle's bottom
        y + 10 > paddleY              // Ball's bottom > Paddle's top
    ){
      dy = -dy;
    }
}

function drawBricks(){
  for(let c=0;c<brickcolumn;c++){
    for(let r=0;r<brickrow;r++){
      if(bricks[c][r].status==1){

        const brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
        const brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;

        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;

        brush.beginPath();
        brush.rect(brickX,brickY,brickWidth,brickHeight);
        brush.fillStyle = "red";
        brush.fill();
        brush.closePath();
      }
    }
  }
}


function collisionDetection(){
  for(let c=0;c<brickcolumn;c++){
    for(let r=0;r<brickrow;r++){
      const b = bricks[c][r];
      if(b.status===1){
        if(x>b.x && x<b.x+brickWidth && y>b.y && y<b.y+brickHeight){
          dy = -dy;
          b.status = 0;
          score++;
          if(score === brickrow*brickcolumn){
            alert("You Win");
            document.location.reload();
            return;
          }
        }
      }
    }
  }
}

function drawScore(){
  brush.font = "16px Arial"
  brush.fillStyle = "red"
  brush.fillText("Score: "+score, 8, 20);
}

draw();
