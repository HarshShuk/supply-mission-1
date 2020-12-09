class Box{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height)
        this.width=width;
        this.height=height;
        World.add(world,this.body)
        console.log(this.body)
    }
    display(){
        
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
       
    }
}