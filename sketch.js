
var monkey , monkey_running
var banana , bananaGroup,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score=0;
var PLAY =1;
var END=0;
var gameState="PLAY";


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  

 obstacleGroup = new Group();
  bananaGroup = new Group();
}


function draw() {
background(225);
  
   stroke("black");
  textSize(20);
  fill("black");
  
  text("score:" + score,100,50);
  if(gameState==="PLAY"){

  if(ground.x<0){
      ground.x=ground.width/2;
     
     }
  
  if(keyWentDown("space")){
    
    monkey.velocityY=-15;
  }
   Food();
rocks();

  
  if(keyWentUp("space")){
    
    monkey.velocityY=7;
  }
    if (obstacleGroup.isTouching(monkey)){
      
      obstacleGroup.destroyEach();
      bananaGroup.destroyEach();
      gameState="END"; 
    }
    
  monkey.collide(ground);
    
    if(bananaGroup.isTouching(monkey)){
      
      score = score+2; 
      switch(score){
          
        case 10:monkey.scale=0.12;
          break;
          case 20:monkey.scale=0.14;
          break;
          case 30:monkey.scale=0.16;
          break;
          case 40:monkey.scale=0.18;
          break;
          default:break;
          
      }
      bananaGroup.destroyEach();
    }
 
  }
  if (gameState==="END"){
    monkey.velocityX=0; 
    bananaGroup.setVelocityXEach=(0);
    obstacleGroup.setVelocityXEach=(0);
    obstacleGroup.setLifetimeEach=(-1);
    bananaGroup.setLifetimeEach=(-1); 
    textSize(20); 
    text("game over", 100,100);
    monkey.visible= false;
    ground.visible=false;
  
    
    
  }
  drawSprites();
}

function Food(){
 if(frameCount % 80===0){
   
   var banana=createSprite("200,200,20,20");
banana.y=Math.round(random(120,200));
   banana.x=200;
   banana.y=200;
   banana.addImage(bananaImage);
   banana.scale=0.1;
   banana.velocityX=-7;
   banana.lifetime=100;
 bananaGroup.add(banana);
   
   
   
   
 
 }
  
}

function rocks(){
  
  if (frameCount % 300===0){
    
    var obstacle=createSprite("300,300,20,20");
    obstacle.y=Math.round(random(120,200));
    obstacle.y=320;
    obstacle.x=300;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-7;
    obstacle.lifetime=100;
   obstacleGroup.add(obstacle);
    
    
  }
}








