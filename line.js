class Line {

    constructor(bodyA,bodyB,offsetX,offsetY) {

        this.offsetX = offsetX
        this.offsetY = offsetY

        var options = {

            bodyA: bodyA,
            bodyB: bodyB,

            //pointB: {x:this.offsetX , y:this.offsetY},

            //length: 100,
            //sniffness:0.7

        }

        this.line = Constraint.create(options);

        World.add(world,this.line)

    }

    display() {

        var pointA = this.line.bodyA.position
        var pointB = this.line.bodyB.position

        strokeWeight(2)

        var Anchor1X = pointA.x
        var Anchor1Y = pointA.y

        var Anchor2X = pointB.x + this.offsetX
        var Anchor2Y = pointB.y + this.offsetY

        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y)

    }
}