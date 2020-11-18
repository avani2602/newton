class Bob{
    constructor(x,y,radius){
        var options = {
 
            restitution: 0.1
        }

        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);

        this.radius = radius;
    }
    display(){
        var pos = this.body.position;

        ellipseMode(CENTER);
        fill("lightGrey");
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x})
	}
}