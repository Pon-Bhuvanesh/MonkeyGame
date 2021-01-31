var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score

function preload(){
monkey_running =   loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
createCanvas(600,600);
  
var survivaltime=0

  //creating Monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1

  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  FoodGroup=new Group();
  obstaclesGroup=new Group();
}

function draw() {
  background(225);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
   monkey.velocityY=-8
    //ground.velocityY = -12;
  }  
   monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);  
  spawnFood()
  spawnObstacles()
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
    
  }
  
  stroke("black");
  textSize(20);
    fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text(" survival Time:"+survivalTime,100,50);
}

function spawnFood(){
  //Write code here to spawn the food
  if(frameCount % 80 === 0){
    banana =  createSprite(600,250,40,10);
  banana.y = random(120,200);
  banana.velocity.y = -5;
  
  banana.lifetime =300;
  monkey.depth  = banana.depth +1;
  //add image of banana 
  banana.addImage(bananaImage)
  banana.scale = 0.05;
  //add image to banana to the group
    FoodGroup.add(banana);
  }
}

  
function spawnObstacles(){
  //Write code here to spawn the food
  if(frameCount % 80 === 0){
    obstacle =  createSprite(800,320,40,10);
  obstacle.velocityX = -6;

  monkey.depth  = obstacle.depth +1;
  
    //add image of banana 
  obstacle.addImage(obstacleImage)
  obstacle.scale = 0.2;
  //LifeTime fo obstacle
      obstacle.lifetime =300;
    
    
    //add image to banana to the group
  obstaclesGroup.add(obstacle);
  }
}



