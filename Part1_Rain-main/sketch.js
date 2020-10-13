const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops1;
var drops = []
var box1;
var umbrella;
var boy, boy_img; 
var thunder1, thunder_img1;
var thunder2, thunder_img2;
var thunder3, thunder_img3;
var thunder4, thunder_img4;
var maxDrops = 50;
var ground;




function preload() {
    boy_img = loadImage("../images/WalkingFrame/walking_1.png")
    thunder_img1 = loadImage("../images/thunderbolt/1.png");
    thunder_img2 = loadImage("../images/thunderbolt/2.png");
    thunder_img3 = loadImage("../images/thunderbolt/3.png");
    thunder_img4 = loadImage("../images/thunderbolt/4.png");
    
}

function setup(){
    var canvas = createCanvas(1200,600);
    frameRate(30);
    engine = Engine.create();
    world = engine.world;
    //box1 = Bodies.rectangle(200, 100, 80, 80)
    //drops1 = new Drops(350, 70, 10, 10);
    for(var i=0; i<maxDrops; i++){
      drops.push(new Drops(random(0,400), random(0,400), 5, 10));
    }
    umbrella = new Umbrella(300, 300, 50, 30);

    ground = new Ground(300, 600, 1390, 10)

    boy = createSprite(300, 420);
    boy.addImage(boy_img);
    thunder1 = createSprite(100, 10);
    thunder1.addImage(thunder_img1);

    thunder2 = createSprite(300, 10);
    thunder2.addImage(thunder_img2);

    thunder3 = createSprite(420, 10);
    thunder3.addImage(thunder_img3);

    thunder4 = createSprite(50, 10);
    thunder4.addImage(thunder_img4);

    Engine.run(engine);

}

function resizeimg(){
    boy_img.resize(350, 430);
    thunder_img1.resize(400, 400);

}

function draw(){

    background(0);
    
    // if(drops.isTouching()){

    // }

  

    ///////////////////////////
    if (frameCount % 100 === 0) {
    var random_number = Math.floor(Math.random() * 4)+1;
    switch (random_number) {
        case 1:
            thunder1.display();
          break;
        case 2:
            thunder2.display();
          break;
        case 3:
            thunder3.display();
          break;
        case 4:
            thunder4.display();
          break;
       // default:
    }
  }
    ///////////////////////////
   
    //rect( box1.position.x,box1.position.y,80,80);
    //drops1.display();
    umbrella.display();
    boy.display();
   
    
      for(var i=0; i<maxDrops; i++){
        drops[i].display();
       
      }
    

    
  Engine.update(engine);
    resizeimg();
}
