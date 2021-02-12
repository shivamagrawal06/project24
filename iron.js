class Iron {
    constructor(x,y){
    
     var options={
    
    'restitution':0,
    'friction':5,
    'density':2
     }
    this.body= Bodies.rectangle(x,y,100,50,options);
    this.width=100;
    this.height=50;
    World.add(world,this.body);
    
    }
    display(){
    
    var pos=this.body.position;
    
    var angle= this.body.angle;
    push();
    translate( pos.x, pos.y);
    rotate(angle);
    fill("red");
    strokeWeight(2);
    stroke("black");
    text("iron")
    rect(0,0,this.width,this.height);
    pop();
    }
    
    
    }