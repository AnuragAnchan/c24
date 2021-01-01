class Log{
    constructor(x,y,height,angle){
        //properties 
        var options = {
            restitution:0.8,
            friction:1.5,
            density:1.0,
            }
    this.logbody=Bodies.rectangle(x,y,20,height,options);
    Matter.Body.setAngle(this.logbody,angle)
    World.add(MyWorld,this.logbody);
    this.width=20;
    this.height=height;
    }
//functions
  display(){

    var pos=this.logbody.position;
    var angle=this.logbody.angle;
    push();
    translate(pos.x,pos.y);
    angleMode(RADIANS);
    rotate (angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("brown")
      fill(255);
      rect(0,0,this.width,this.height);
      pop ();
  }
}