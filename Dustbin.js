class Dustbin {
    constructor(x,y,width,height){
        var options = {
            'isStatic' : true
        }

        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width
        this.height = height

        World.add(world, this.body);


        this.image = loadImage("dustbingreen.png")
    }
    display(){
        imageMode(CENTER);
        fill("white");
        image(this.image, this.body.position.x, this.body.position.y-90, this.width, this.height);
    }

}