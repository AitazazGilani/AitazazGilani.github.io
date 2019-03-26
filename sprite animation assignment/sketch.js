// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let movingRight=[];
let movingLeft=[];
let counterForRight=1;
let counterForLeft=1;
let speed=1;
let castle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
  
}

function draw() {
  background(0);
  image(castle,windowWidth/2,windowHeight/2);
  imageMode(CENTER);
  playerControls();
  // if (frameCount%int(speed)===0){
  //   image(movingRight[counter],windowWidth/2,windowHeight/2);
  //   counter++;
  //   if (counter===17){
  //     counter=6;
  //   }
  
  // }
}

function preload(){
  castle = loadImage("assets/background final.jpg");
  for (let i=1;i<18;i++){
    movingRight.push(loadImage("assets/"+i+" walking right.png"));
    movingLeft.push(loadImage("assets/"+i+" walking left.png"));
  }
  
}



function playerControls(){
  if (keyIsPressed===false){
    counterForLeft=0;
    counterForRight=0;

    
  }
  if (keyIsDown(RIGHT_ARROW)===true){
    if (frameCount%int(speed)===0){
      image(movingRight[counterForRight],windowWidth/2,windowHeight/2);
      counterForRight++;
      if (counterForRight===17){
        counterForRight=6;
      }
    
    }
  }
  
  else if (keyIsDown(LEFT_ARROW)===true){
    if (frameCount%int(speed)===0){
      image(movingLeft[counterForLeft],windowWidth/2,windowHeight/2);
      counterForLeft++;
      if (counterForLeft===17){
        counterForLeft=6;
      }
    
    }
  }


}