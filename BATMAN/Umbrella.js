class Umbrella{
    constructor(x,y){
       var options={
            isStatic:true
        }
        this.umbrellaImg = loadImage("images/Walking Frame/ walking_1.png")
        this.umbrellaBody = Bodies.circle(x, y,100, 100,options);
        this.h = 100;
        this.w = 100
        World.add(world, this.umbrellaBody);
    }

    display(){
        var pos = this.umbrellaBody.position
        image(this.umbrellaImg, pos.x, pos.y, this.w, this.h)
    }
}