class Pac{
    constructor(x,y){
        var options = {
            isSatic: true

        }
        this.body = Bodies.rectangle(x, y, 20, 20, options)
        this.x = x;
        this.y = y;
        this.image = loadImage("sprites/Pac.jpg");
        World.add(world, this.body);
    }

    display(){
        image(this.image, this.x, this.y, 35, 35)
        
    }
}