var player;
var ground1, ground2, ground3;
var groundGroup, enemyGroup, enemyGunGroup;
var groundImg, bgImg;
var stone1, stone2;
var shoot;
var bush1, bush2;
var playerGun;
var edges;
var enemy1, enemy2, enemy3;
var bulletGroup;
var enemyGroupImg, enemy2Img;
var gameState = "play";
var lives = 3;




function preload() {
  groundImg = loadImage("green ground.png");
  playerImg = loadImage("Boy 1.png");
  enemyGroupImg = loadImage("Enemy1.png");
  enemy2Img = loadImage("Enemy2.png");
  bgImg = loadImage("jungle.jpg");
  stone1Img = loadImage("Stone1.png");
  stone2Img = loadImage("Stone2.png");
  bush1Img = loadImage("Bush1.png");
  bush1Img = loadImage("Bush1.png");

}

function setup() {
  createCanvas(800, 600);
  edges = createEdgeSprites();


  ground1 = createSprite(380, 570, -40, 200);
  ground2 = createSprite(150, 250);
  ground3 = createSprite(650, 250, 150, 20);

  groundGroup = new Group();
  enemyGroup = new Group();
  bulletGroup = new Group();
  groundGroup.add(ground1);
  groundGroup.add(ground2);
  groundGroup.add(ground3);
  ground1.addImage(groundImg);
  ground2.addImage(groundImg);
  ground3.addImage(groundImg);
  bush1 = createSprite(690, 208, 50, 50);
  bush1.addImage(bush1Img);
  bush1.scale = 0.3;
  bush2 = createSprite(160, 490, 50, 50);
  bush2.addImage(bush1Img);
  bush2.scale = 0.4;
  stone1 = createSprite(155, 195, 50, 50);
  stone1.addImage(stone1Img);
  stone1.scale = 0.3;
  stone2 = createSprite(470, 520, 50, 50);
  stone2.addImage(stone2Img);
  stone2.scale = 0.3;
  player = createSprite(100, 100, 50, 50);
  player.addImage(playerImg);
  player.debug = false;
  player.setCollider("rectangle", 0, 0, 30, 50);
  player.scale = 1.5;
  ground1.scale = 1.7;
  ground2.scale = 0.6;
  ground3.scale = 0.6;

  ground1.debug = true;
  ground2.debug = true;
  ground3.debug = true;

  ground1.setCollider("rectangle", 0, 0, 900, 30);
  enemy1 = createSprite(600, 550, 50, 50);
  enemy1.shapeColor = "lime";
  enemy2 = createSprite(550, 150, 50, 50)
  enemy2.shapeColor = "blue";
  enemy3 = createSprite(150, 550, 50, 50);
  enemy3.shapeColor = "orange";
  enemy1.addImage(enemyGroupImg);
  enemy2.addImage(enemyGroupImg);
  enemy3.addImage(enemy2Img);
  enemy1.scale = 0.8;
  enemy2.scale = 0.8;
  enemy3.scale = 0.8;
  enemy3.debug = false;
  enemy2.debug = false;
  enemy1.debug = false;
  enemy1.setCollider("rectangle", 10, 0, 40, 95);
  enemy2.setCollider("rectangle", 10, 0, 40, 95);
  enemy3.setCollider("rectangle", -10, 0, 40, 95);

  enemyGroup.add(enemy1);
  enemyGroup.add(enemy2);
  enemyGroup.add(enemy3);
}
function draw() {
  background(bgImg);
  player.collide(groundGroup);

  player.collide(edges);

  if (bulletGroup.isTouching(enemy1)) {

    lives = lives - 1;
    text("Congratulations, I enemy is dead", 400, 300);
    enemy1.destroy();
  }

  if (bulletGroup.isTouching(enemy2)) {

    lives = lives - 1;
    text("Congratulations, I enemy is dead", 400, 300);
    enemy2.destroy();
  }


  if (keyDown("d")) {
    console.log("shoot");
    bullet();
  }

  controls();
  enemyMovements();
  drawSprites();

  fill("black");
  textSize(20);
  text("total lives left : " + lives, 600, 570);


}
function controls() {
  if (keyDown(UP_ARROW)) {
    player.velocityY = -7;
  }
  if (keyDown(LEFT_ARROW)) {
    player.x = player.x - 7;
    player.mirrorX(-1);
  }
  if (keyDown(RIGHT_ARROW)) {
    player.x = player.x + 7;
    player.mirrorX(1);
  }

  player.velocityY = player.velocityY + 4;


}





function enemyMovements() {
  enemy1.velocityY = enemy1.velocityY + 1;
  enemy2.velocityY = enemy2.velocityY + 1;
  enemy3.velocityY = enemy3.velocityY + 1;

  enemyGroup.collide(groundGroup);

}
function bullet() {

  shoot = createSprite(player.x, player.y, 20, 5);
  shoot.velocityX = 10;
  shoot.shapeColor = "red";
  bulletGroup.add(shoot);
}