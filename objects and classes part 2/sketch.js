
let ballObjects=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for (let currentBall of ballObjects){
    currentBall.move();
    currentBall.mouseOver();
    //fill(random(255),random(255),random(255));
    currentBall.display();
  }
}

function mouseClicked(){
  ballObjects.push(new Ball(mouseX,mouseY));
}


class Ball{
  //constuctor and class properties
  constructor(x_,y_){
    this.x=x_;
    this.y=y_;
    this.xSpeed=random(-5,5);
    this.ySpeed=random(-5,5);
    this.size=30;
    this.gravity=0.1; //adds gravity
  }
  //class methods
  display(){
    ellipseMode(CENTER);
    ellipse(this.x,this.y,this.size,this.size);
  }
  move(){
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
    this.ySpeed+=this.gravity;
    if (this.x<0 || this.x>width){
      this.xSpeed*=-1;
    }
    else if (this.y>height){
      this.ySpeed*=-0.92;
      this.y=height;

    }
  }
  mouseOver(){
    let d=dist(this.x,this.y,mouseX,mouseY);
    if (d<this.size/2){
      fill(20,80,99);

    }
    else if (mouseIsPressed&&mouseButton===LEFT){
      this.size+=20;
    }
    else {
      fill(255);
    }
  }
  

}
