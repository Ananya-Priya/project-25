class Paper
    {
  constructor(x,y,r){

    var opitions=
{
  
    restitution : 1.0,
    friction :0.3,
    density : 1.2
    


}
this.body=Bodies.circle(x,y,r,opitions)
this.r=r
this.image=loadImage("paper.png")
World.add(world,this.body);



  }





display()
{
  push()
translate(this.body.position.x,this.body.position.y);

    




fill("brown");


//ellipseMode(RADIUS)
imageMode(CENTER)
image(this.image,0,0,this.r+10,this.r+10);
pop()
}
}