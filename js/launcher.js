class launcher {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;
        this.launch = Matter.Constraint.create(options);
        World.add(world, this.launch);
    }
    fly() {
        this.launch.bodyA = null;
    }
    attach(bodyA) {
        var options = {
            bodyA: bodyA,
            pointB: {x:235,y:420},
            stiffness: 0.004,
            length: 10
        }
        this.launch.bodyA = this.launch.bodyA;
        this.pointB = {x:235,y:420};
        this.launch = Matter.Constraint.create(options);
        World.add(world, this.launch);
    }
    display() {
        if(this.launch.bodyA) {
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);

            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
}

