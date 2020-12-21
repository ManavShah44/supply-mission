class Brick{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,option)
        World.add(world,this.body)
        
        this.h=height
        this.w=width


        
    }
    display(){
        push()
       
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
        pop()
    }}
