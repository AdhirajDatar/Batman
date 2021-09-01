var Engine = Matter.Engine;
var Bodies = Matter.Bodies;
var World = Matter.World;
 var engine
 var world


var umbrella1
var drop

function preload(){
    walk1 = loadImage("images/WalkingFrame/walking_1.png");
}

function setup(){

    engine = Engine.create();
    world = engine.world;
    createCanvas(800,800);
    //umbrella1 = new Umbrella(300, 300);
    drop = new Drop (random(0,800), 0);
}

function draw(){
    drop.display()
    drop.update()
}   

