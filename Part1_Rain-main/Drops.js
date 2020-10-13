class Drops{
    constructor(x, y, width, height,options) {
      var options = {
        'friction': 0.1,
        'restitution':0,
        'density': .1
      };
        this.body = Bodies.circle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

      }
     
      //function to draw ellipse
      display(){
        push();
        if(this.body.position.y > 580){
          Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
        // if (this.body.position.y > 600){
        //   console.log("hey");
        //   translate(this.body.position.x, this.body.position.y = -200);
        //   this.body.position.y = -200;
        //   this.display();
        // } else {
        //   //console.log(this.body.position.y );
          translate(this.body.position.x, this.body.position.y);
        

        fill("blue");
        circle(0, 0, this.width, this.height)
        pop();
       
      }
      
      remix(){
        if(drops.isTouching(ground)){
          this.body.position.y = 0;
        }
      }

  update(){
    //this.body.position.x = 600; 
    this.body.position.y = 0;
  }
}