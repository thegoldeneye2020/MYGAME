const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var ball;


function preload(){
  
}





function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;

 ball=createSprite(50, 45, 40, 40);
 
 wall1=new Walls(30,400,20,displayHeight-80);
  wall2=new Walls(690,10,displayWidth-100,20);
  wall3=new Walls(605,709,displayWidth-150,20);
  wall4=new Walls(1265,330,20,displayHeight-100);
  wall5=new Walls(200,130,150,20);
  wall6=new Walls(120,196,20,150);
wall7=new Walls(310,270,400,20);
wall8=new Walls(400,140,20,240);
wall9=new Walls(520,335,20,150);
wall10=new Walls(250,355,20,150);
wall11=new Walls(90,430,100,20);
wall12=new Walls(460,400,100,20);
wall13=new Walls(400,440,20,100);
wall14=new Walls(285,500,250,20);
wall15=new Walls(500,625,20,150);
wall16=new Walls(800,70,20,100);
wall17=new Walls(600,150,150,20);
wall18=new Walls(680,190,20,100);
wall19=new Walls(745,250,150,20);
wall20=new Walls(830,290,20,100);
wall21=new Walls(945,350,250,20);
wall22=new Walls(1080,245,20,230);
wall23=new Walls(1080,130,230,20);
wall24=new Walls(955,170,20,100);
wall25=new Walls(1205,250,100,20);
wall26=new Walls(1150,290,20,100);
wall27=new Walls(1130,450,250,20);
wall28=new Walls(800,649,20,100);
wall29=new Walls(800,600,250,20);
wall30=new Walls(665,560,20,100);
wall31=new Walls(935,560,20,100);
}

function draw() {
 background("black"); 
Engine.update(engine);


  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
wall8.display();
wall9.display();
wall10.display();
wall11.display();
wall12.display();
wall13.display();
wall14.display();
wall15.display();
wall16.display();
wall17.display();
wall18.display();
wall19.display();
wall20.display();
wall21.display();
wall22.display();
wall23.display();
wall24.display();
wall25.display();
wall26.display();
wall27.display();
wall28.display();
wall29.display();
wall30.display();
wall31.display();





  if(keyDown(UP_ARROW)) {
    ball.velocityX = 0;
    ball.velocityY = -3;
  }
  if (keyDown(DOWN_ARROW)) {
    ball.velocityY = 3;
ball.velocityX = 0;
}

if (keyDown("RIGHT_ARROW")) {
  ball.velocityY = 0;
ball.velocityX = 3;
}

if (keyDown("LEFT_ARROW")) {
  ball.velocityY = 0;
ball.velocityX = -3;
}


/*if (ball.isTouching(wall1)) {
  ball.x=50;
  ball.y=45;
  
}*/
  drawSprites();
}