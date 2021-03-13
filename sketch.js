const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var myWorld,myEngine;
var ground1,shape2,shape4,shape1,shape3
function setup() {
  createCanvas(1200,500);
  myEngine=Engine.create();
  myWorld=myEngine.world
 ground1=new ground(600,height,1200,20)
shape2=new box(700,320,70,70)
// box2=new box(920,320,70,70)
// box3=new box(700,240,70,70)
// box4=new box(920,240,70,70)
shape4=new pig(810,350,50,50)
// pig2=new pig(810,220,50,50)
shape1=new bird(300,300,100,50);
shape3=new log(810,260,300,PI/2)
// log2=new log(810,180,300,PI/2)
// log3=new log(760,120,150,PI/7)
// log4=new log(870,120,150,-PI/7)
//  box5=new box(810,160,70,70)
// box3=new box(240,100,100,50)
// box4=new box(240,100,50,100)
console.log(box2.body.angle);
}

function draw() {
  background("lightBlue");  
  Engine.update(myEngine);
  shape3.display()
  shape1.display()
  shape4.display()
  ground1.display()
  shape2.display()
  // box2.display()
  // pig2.display()
  // shape2.display()
  // box4.display()
  // log2.display()
  // box5.display()
  // log3.display()
  // log4.display()
  
}