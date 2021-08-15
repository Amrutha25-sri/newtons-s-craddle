class Rope{
    constructor (body1,body2,pointx,pointy){
        this.offsetX = pointx
        this.offsetY = pointy
        var option = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
    this.rope = Constraint.create(option)
    World.add(world,this.rope)
        
    }
    display(){
        var point1 = this.rope.bodyB.position.x + this.offsetX
        var point2 = this.rope.bodyB.position.y + this.offsetY
        stroke("orange")
        strokeWeight (2)
     line (this.rope.bodyA.position.x,this.rope.bodyA.position.y,point1,point2)
    }
}