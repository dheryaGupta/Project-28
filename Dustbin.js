class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic : true
          }
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
          this.image = loadImage("dustbin.png");
          this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
          World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(255,255,255);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        
    }
}