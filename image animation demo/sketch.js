// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lionL;
let lionR;
let direction=1;
let pinImages=[];
let counter=0;
let speed=1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
 

}


function draw() {
  background(220);
  imageMode(CENTER);
  moving();
 
  if (frameCount%int(speed)===0){
    image(pinImages[counter],width/2,height/2);
    counter++;
    if (counter>8){
      counter=0;
    }
  
  }
  
  if (direction===1){
    image(lionL, mouseX, mouseY);
  }
  else {
    image(lionR,mouseX, mouseY);
  }
}


function preload() {

  lionL = loadImage("assets/lion-left.png");
  lionR=loadImage("assets/lion-right.png");
  for (let i=0;i<9;i++){
    pinImages.push(loadImage("assets/pin-0"+i+".png"));
  }
}
function moving(){
  if(mouseX<pmouseX){
    direction=1;
  }
  else if (mouseX<pmouseY){
    direction=2;
  }
}