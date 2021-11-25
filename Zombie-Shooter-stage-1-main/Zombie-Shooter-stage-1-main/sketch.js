var bg,heart1,heart2,heart3,heart1Img,heart2Img,heart3Img,shooter,shooterImg,zombie,zombieImg,loserImg,winnerImg,losersound,winnersound,bulletsound
var gameState= "start"
var zombieGroup







function preload() {
bg = loadImage("assets/bg.jpeg")
heart1Img = loadImage("assets/heart_1.png")
heart2Img = loadImage("assets/heart_2.png")
heart3Img = loadImage("assets/heart_3.png")
winnerImg = loadImage("assets/PUBG victory.png")
loserImg = loadImage("assets/I lost.png")
bulletImg = loadImage("assets/Pew Pew.png")
zombieImg = loadImage("assets/zombie.png")
shooterImg = loadImage("assets/shooter_2.png")
shooterShooting = loadimage("assets/shooter_3.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

 }

function draw() {
background(bg)
drawSprites();
}
