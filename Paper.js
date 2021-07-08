class Paper{

    constructor(x,y, radius) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':0.2,
            'isStatic':false
        }

        this.body = Bodies.circle(x,y,radius/2,options);
        this.radius = radius
        World.add(world,this.body);

        this.image = loadImage("paper.png")
    }
    display(){
         fill("#DA1EFF");
         imageMode(RADIUS);
         image(this.image, this.body.position.x, this.body.position.y-20, this.radius, this.radius);
        
    }
     
}
