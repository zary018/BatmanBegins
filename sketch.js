const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops = 100;
var drops = [];
var thunderCreatedFrame=0
var thunder,walkingMan
function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");

    WalkingMan = loadImage("walking_1.png");
}

function setup(){
    var canvas = createCanvas(450,800);
    engine = Engine.create();
    world = engine.world;

    walkingMan = createSprite(200,500);
    walkingMan.addImage(WalkingMan);
    walkingMan.scale = 0.6;
    
    if(frameCount % 150 === 0){
    for(var i=0 ; i< maxDrops ; i++){
        drops.push(new createDrop(random(0,1000) , random(0,1000)))
    }
   }
}

function draw(){
    Engine.update(engine);

    background(0)

    umbrella1 = new Umbrella(200,500);

    for(var i=0 ; i< maxDrops ; i++){
        drops[i].showDrop()
        drops[i].updateY()
    }

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

   // umbrella1.display()

    drawSprites()
}   

