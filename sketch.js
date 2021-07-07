const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,music;
var girl;
var snow,olaf;
var snowball1
function preload(){
  backgroundImg = loadImage("snow2.jpg");
  music=loadSound("music.mp3")
}

function setup(){
    var canvas = createCanvas(2000,700);
    engine = Engine.create();
    world = engine.world;

    snowball=new Snowball(random(50, 350),40, 10, 10)
    snowball1=new Snowball(random(0, 1000),random(50, 500), 30, 30)
    snowball2=new Snowball(random(0, 1000),random(50, 500), 30, 30)
    snowball3=new Snowball(random(0, 1000),random(50, 500), 30, 30)
    snowball5=new Snowball(random(0, 1000),random(50, 500), 30, 30)






    //orangeL = createSprite(random(50, 350),40, 10, 10);


    ground = new Ground(600,height,1200,20);
   
    girl = new Girl(900,100,70,70);
   

    olaf = new Olaf(200,200,80,80);
    snow = new Snow(200,200,80,80);
    console.log(girl)

}

function draw(){
    background(backgroundImg)
    Engine.update(engine);
 



    if (frameCount % 100 == 0) {
      snowball1=new Snowball(random(0, 1000),random(50, 500), 30, 30)

    }
    if (frameCount % 200 == 0) {
      snowball2=new Snowball(random(70, 1500),random(50, 1000), 30, 30)

    }
    ground.display();
      girl.display();
    
     olaf.display();
     snow.display();
     snowball.display();
     snowball1.display();


   //  music.play() ;   
}

function keyPressed(){

  if(keyCode===LEFT_ARROW){
    girl.velocityX=-5;
    
  }
}

//function keyPressed(){
 // if(keyCode === 32 && bird.body.speed<1){
   //   bird.trajectory=[];
    // slingshot.attach(bird.body);
 // Matter.Body.setPosition(bird.body,{x:200,y:50});

 // }
//}