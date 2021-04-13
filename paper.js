class paper
{
  constructor(x,y,r)
  {
    var options=
    {
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2,
    }
    this.r=r
    this.bodies= Bodies.circle(x, y, r, options);
    this.image=loadImage("paper.png");
    World.add(world, this.body);
  }
}
  {
    
    var paperposition=this.body.position

    push()
    translate(paperposition.x,paperposition.y)
    rectMode(CENTER)

    fill(255)
    image(this.image, 0,0,2*this.r, 2*this.r)
   pop()  
  }


    
