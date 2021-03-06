class Paper{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x,this.y,this.radius/2,options);
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var radius = this.body.radius
        //translate(pos.x,pos.y);
        fill(93,39,56);
        imageMode(RADIUS);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
}