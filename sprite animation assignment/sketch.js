// Project Title
// Your Name
// Date
//
// Extra for Experts:
// i created variables for the charecter facing left and right directions, i also animated alucards cape whenever he stops and goes
//he doesn an animation with his cape. 
//The code is not perfect i notice alot of things i couldve shorten or removed and create a more effiecnent code but with all the time i got i noticed these effiencies very late and would take forever to rewrite this.

let movingRight=[]; // will hold all the images moving right
let movingLeft=[]; // will hold all the images moving left
let counterForRight=1;
let counterForLeft=1;
let speed=1; 

let castle; // background for the game

let staticRight; //this value will hold the static image of alucard facing right
let staticLeft; //this value will hold the static image of alucard facing left

let facingLeft; // this value will hold the call back function to the direction alucard is facing 
let facingRight=true; // the charecter is facing right by defult. 


function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(17);
  
  
}

function draw() {
  
  background(0);
  image(castle,0,0);
  push();
  translate(width/2,height/2);
  scale(3);
  imageMode(CENTER);
  playerControls();
  pop();
  
}

function preload(){
  castle = loadImage("assets/castle1.jpg");
  staticRight=loadImage("assets/static right.png");
  staticLeft=loadImage("assets/static left.png");
  for (let i=1;i<18;i++){
    movingRight.push(loadImage("assets/"+i+" walking right.png"));
    movingLeft.push(loadImage("assets/"+i+" walking left.png"));
  }
}



function playerControls(){
  if (keyIsPressed===false){
    counterForLeft=0;
    counterForRight=0;
    if (facingRight===true){
      image(staticRight,0,0);  //windowWidth/2,windowHeight/2
    }
    else if (facingLeft===true){
      image(staticLeft,0,0);
    }
    
  }
  
  
  else if (keyIsDown(RIGHT_ARROW)===true){
    facingRight=true;
    facingLeft=false;
    if (frameCount%int(speed)===0){
      image(movingRight[counterForRight],0,0);
      counterForRight++;
      if (counterForRight===17){
        counterForRight=6;
      }
    
    }
  }
  
  else if (keyIsDown(LEFT_ARROW)===true){
    facingLeft=true;
    facingRight=false;
    if (frameCount%int(speed)===0){
      image(movingLeft[counterForLeft],0,0);
      counterForLeft++;
      if (counterForLeft===17){
        counterForLeft=6;
      }
    }
  }
}
// function draculaCastle(){
//   castle = loadImage("assets/castle1.jpg");
//   
// }