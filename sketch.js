var swordImg,fruit1Img,fruit2Img,fruit3Img,fruit4Img,
  fruit1,fruit2,fruit3,fruit4,gameOverImg,swooshSound,
  gameOverSound,enemyImg;
var sword
var fruitGrp,enemyGrp;
var alien
var PLAY = 1
var END = 0
var gameState = 1

function preload(){
 swordImg = loadImage("sword.png") 
 fruit1Img = loadImage("fruit1.png")
 fruit2Img = loadImage("fruit2.png")
 fruit3Img = loadImage("fruit3.png")
 fruit4Img = loadImage("fruit4.png")
 enemyImg = loadAnimation("alien1.png","alien2.png")
 gameOverImg = loadImage("gameover.png")
 swooshSound = loadSound("knifeSwooshSound.mp3")
 gameOverSound = loadSound("gameover.mp3")
}

 function setup(){
 createCanvas(600,600)
  
  sword = createSprite(40,200,20,20)
  sword.addImage(swordImg)
  sword.scale = 0.7
  sword.setCollider("rectangle",20,-20,40,100,35)
  sword.debug = false
   fruitGrp = new Group()
   enemyGrp = new Group()
   
   score = 0
 }

  function draw(){
    background("lightblue")
    textSize(25)
    fill("red")
    text("score :"+score,470,30)
  if (gameState===PLAY) {
    sword.y = World.mouseY
    sword.x = World.mouseX
  }
  
  
  if (sword.isTouching(fruitGrp)) {
    fruitGrp.destroyEach()
    swooshSound.play()
    score=score+1
  }
  if (sword.isTouching(enemyGrp)) {
    gameState = END
    sword.addImage(gameOverImg)
    score = 0
    sword.x = 300
    sword.y = 300
    sword.scale = 2
  }
    if (gameState == END) {
     enemyGrp.setVelocityXEach(0)
    fruitGrp.setVelocityXEach(0)
      enemyGrp.destroyEach()
    fruitGrp.destroyEach()
    }
    fruits()
    enemy()
    
  drawSprites()
    
    
}
function fruits(){
   if (World.frameCount%60==0 && gameState == PLAY) {
     r = Math.round(random(1,4))
     if (r==1) {
       fruit1 = createSprite(600,Math.round(random(20,500)),10,10)
       fruit1.scale = 0.2
       fruit1.velocityX = -10
       fruit1.addImage(fruit1Img)
       fruitGrp.add(fruit1)
     } else if (r==2) {
       fruit2 =
createSprite(600,Math.round(random(20,500)),10,10)
       fruit2.scale = 0.2
       fruit2.velocityX = -10 
       fruit2.addImage(fruit2Img)
       fruitGrp.add(fruit2) 
     } else if (r==3) {
       fruit3 =
createSprite(600,Math.round(random(20,500)),10,10)
       fruit3.scale = 0.2
       fruit3.velocityX = -10 
       fruit3.addImage(fruit3Img)
       fruitGrp.add(fruit3)
     } else { fruit4 =
createSprite(600,Math.round(random(20,500)),10,10)
       fruit4.scale = 0.2
       fruit4.velocityX = -10 
       fruit4.addImage(fruit4Img)
       fruitGrp.add(fruit4)
   }
  }
  }

function enemy(){
if (World.frameCount%200==0 && gameState == PLAY) {
  alien = createSprite(400,200,20,20) 
  alien.addAnimation("moving",enemyImg)
  alien.y = Math.round(random(100,300))
  alien.velocityX = -10
  alien.scale = 0.7
  enemyGrp.add(alien)
   }
}
