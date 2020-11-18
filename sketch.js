const Engine = Matter.Engine
const World = Matter.World  
const Bodies = Matter.Bodies
var myWorld,myEngine;
var ground;
var box1,box2,box3;
function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world
  box1 = new Box(200,300,50,50);
  box2 = new Box(230,100,30,40);
  box3 = new Box(250,200,25,35);
  ground = new Ground(200,370,400,10);
}

function draw() {
  background(0);
  Engine.update(myEngine);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
}
