class Umbrella{
    constructor(x,y){
        var options = {
            'isStatic': true
        }
        this.body = Bodies.circle(x,y,170,options);
        this.image = loadImage("walking_1.png");
        this.radius = 170;
        World.add(world,this.body)
    
    }
    
    
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
    
}