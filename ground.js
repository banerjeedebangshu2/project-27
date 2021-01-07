class Ground {

    constructor(x,y,width,height) {

        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);

        this.width = width
        this.height = height

        World.add(world,this.body)

    }

    display(colour1,colour2) {

        var pos = this.body.position;

        rectMode(CENTER)
        fill(colour1)
        rect(pos.x,pos.y,this.width,this.height);

        //fill(colour2)
        //rect(pos.x,pos.y-15,this.width,this.height)
    }
}