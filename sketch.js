const Engine=Matter.Engine;//name spacing
const World=Matter.World;
const Bodies=Matter.Bodies;
var ground
var MyEngine,MyWorld;// variables
var car;
var b1;
var b2
var g1
var p1,p2;
var l1,l2,l3,l4;


function setup() {
  createCanvas(1200,400);
  MyEngine= Engine.create();
  MyWorld=MyEngine.world;
  b1=new box(700,320,70,70);
  b2=new box(920,320,70,70)
  b3=new box(700,240,70,70)
  b4=new box(920,240,70,70)
  b5=new box(810,160,70,70);

  g1=new Ground(600,height,1200,20);
  p1=new Pig(810,350)
  p2=new Pig(810,220)
  l1=new Log(810,260,300,PI/2)
l2=new Log(810,180,300,PI/2)
l3=new Log(760,120,150,PI/7)
l4=new Log(870,120,150,-PI/7)
  
}
function draw() {
  background("lightblue");  
  Engine.update(MyEngine);
  
  b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
  g1.display();
  p1.display();
  p2.display();
  l1.display();
l2.display();
l3.display();
l4.display();
} 
