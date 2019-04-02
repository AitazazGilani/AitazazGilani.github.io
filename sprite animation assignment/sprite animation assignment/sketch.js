// Sprite animation assignment
// Aitazaz Gilani
// 28/3/19
//
// Extra for Experts:
// i created variables for the charecter facing left and right directions, i also animated alucards cape whenever he stops and goes in each direction he doesn an animation with his cape
//added background, added the games offical soundtrack turn on volume and lower it

let movingRight=[]; // will hold all the images moving right
let movingLeft=[]; // will hold all the images moving left
let counterForRight=1; //counts and holds values for how many frames used when moving right
let counterForLeft=1; //counts and holds values for how many frames used when moving right
let speed=1; 
let x=0; // the character starts at 0 in the x dir by defult


let castle; // background for the game

let staticRight; //this value will hold the static image of alucard facing right
let staticLeft; //this value will hold the static image of alucard facing left

let facingLeft; // this value will hold the call back function to the direction alucard is facing 
let facingRight=true; // the charecter is facing right by defult. 


function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(15);
  
}

function draw() {
  background(0);

  push(); //controls the size of the games background
  translate (width/2,height/2);
  scale(1.5);
  imageMode(CENTER);
  image(castle,0,0);
  pop();

  push(); //controls the size of alucard
  translate(x,625); // i eyeballed the value for y value with the background, x is the displacement and there is no y displacement
  scale(6);
  imageMode(CENTER);
  playerControls();
  pop();

}

function preload(){ //loads all of the images and a loop for the sprite
  castle = loadImage("assets/castle1.jpg");
  staticRight=loadImage("assets/static right.png");
  staticLeft=loadImage("assets/static left.png");
  for (let i=1;i<18;i++){
    movingRight.push(loadImage("assets/"+i+" walking right.png"));
    movingLeft.push(loadImage("assets/"+i+" walking left.png"));
  }
}



function playerControls(){ // code for the player controls
  if (keyIsPressed===false){ //static character code
    counterForLeft=0;
    counterForRight=0;
    if (facingRight===true){
      
      image(staticRight,x-7,0);  
    }
    else if (facingLeft===true){
      
      image(staticLeft,x+7,0);
    }
    
  }
  
  
  else if (keyIsDown(RIGHT_ARROW)===true){ //if right arrow key is pressed
    facingRight=true;
    facingLeft=false;
    if (frameCount%int(speed)===0){
      image(movingRight[counterForRight],x,0);
      counterForRight++;
      x=x+7;
      if (counterForRight===17){
        counterForRight=6;
      }
    
    }
  }
  
  else if (keyIsDown(LEFT_ARROW)===true){ // if left arrow key is pressed
    facingLeft=true;
    facingRight=false;
    if (frameCount%int(speed)===0){
      image(movingLeft[counterForLeft],x,0);
      counterForLeft++;
      x=x-7;
      if (counterForLeft===17){
        counterForLeft=6;
      }
    }
  }


  
}
