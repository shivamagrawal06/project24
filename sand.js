class Sand {
    constructor(x,y){
    
     var options={
    
    'restitution':0.8,
    'friction':5,
    'density':1,
     }
    this.body= Bodies.circle(x,y,7,options);
    this.radius=7;
    World.add(world,this.body);
    
    }
    display(){
    
    var pos=this.body.position;
    
    var angle= this.body.angle;
    push ();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("brown");
    strokeWeight(2);
    stroke("black");
     ellipseMode(RADIUS)
   ellipse(0,0,this.radius,this.radius);
    pop();
    }
    
    
    }
