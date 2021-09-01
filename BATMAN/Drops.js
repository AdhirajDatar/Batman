class Drop {
    constructor(x,y){
         var options={
            friction:0.2
        }
        this.r = 10 
        this.rain = Bodies.circle(x, y,10, options);
        World.add(world, this.rain);
    }

    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,800),y:0})
        }
    }

    display(){
        fill("white");
        ellipseMode(RADIUS);
        ellipse(this.rain.position.x,this.rain.position.y,this.r,this.r);
    }

    
}