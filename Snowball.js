class Snowball{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("snowball.png");
        
        World.add(world, this.body);
      }



    /*  rand() {
        orangeL = createSprite(random(50, 350),40, 10, 10);
        orangeL.addImage(orangeImg);
        orangeL.scale=0.08;
        orangeL.velocityY = 3;
        orangeL.lifetime = 150;
        } */
      display(){
       
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
           
        this.body.velocityY = 3;
       

        pop();
      }
}