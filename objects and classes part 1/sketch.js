// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let walkers=[];
const NUM_WALKERS=9000;


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<NUM_WALKERS;i++){
    walkers.push(new Walker(random(width),random(height)));
  }
}

function draw() {
  //background(220);
  for (let i=0;i<NUM_WALKERS;i++){
    walkers[i].move();
    walkers[i].display();
  }
}
class Walker{
  //constructor and class properties
  constructor(x_,y_){
    this.x=x_;
    this.y=y_;
    this.c=color(random(255),random(255),random(255));
    this.speed=10;
    this.size=1;
  }
  //class methods and procedures
  display(){
    rectMode(CENTER);
    fill(this.c);
    rect(this.x,this.y,this.size,this.size);

    
  }
  move(){
    let myChoice=Math.floor(random(4));
    if (myChoice===0){ //right
      this.x+=this.speed;
    }
    else if (myChoice===1){ //left
      this.x-=this.speed;
    }
    else if (myChoice===2){ //up
      this.y-=this.speed;
    }
    else if (myChoice===3){ //down
      this.y+=this.speed;
    }

  }

}