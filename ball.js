class Ball {

    constructor(x,y,radius) {

        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2

           //isStatic: true
        }


        this.body = Bodies.circle(x,y,radius,options)

        this.radius = radius;

        //this.image = loadImage("sprites/paper.png")

        World.add(world,this.body)

    }

    display(color) {

        var pos = this.body.position;

        push();

        //translate(pos.x,pos.y)

        strokeWeight(2);
        ellipseMode(CENTER)
        fill(color)
        ellipse(pos.x,pos.y,this.radius*2)

        pop();
    }
}