class Ground{
    constructor(x,y,width,height){
        //properties 
        var options = {
            isStatic:true
            }
    this.groundbody=Bodies.rectangle(x,y,width,height,options);
    World.add(MyWorld,this.groundbody);
    this.width=width;
    this.height=height;
    }
//functions
  display(){

    var pos=this.groundbody.position;
      rectMode(CENTER);
      fill ("brown")
      rect(pos.x,pos.y,this.width,this.height);
  }
}