class Dustbin
{
    constructor(x,y,width,height)
    {
        var opitions={
            isStatic:true,
            friction:0.3
        }
      
        this.body=Bodies.rectangle(x,y,width,height,opitions);
        this.width=width
        this.height=height
        
        this.image=loadImage("dustbingreen.png")
        World.add(world,this.body);

    }
   
    display()
    {
            push();
            
            imageMode(CENTER);
            
            

            image(this.image,this.body.position.x,this.body.position.y-100, this.width ,  this.height +200)

    }
    
}