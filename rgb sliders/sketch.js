// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let redSlider;
let blueSlider;
let greenSlider;
let radio;
let diffShapes;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r();
  b();
  g();
  radioButtons();
}
function r(){
  redSlider=createSlider(0,255,120);
  redSlider.position(50,50);
  textSize(20);
  fill(0);
  text("R",40,50);

}
function b(){
  blueSlider=createSlider(0,255,120);
  blueSlider.position(50,80);
  textSize(20);
  fill(0);
  text("B",40,80);
}
function g(){
  greenSlider=createSlider(0,255,120);
  greenSlider.position(50,110);
  textSize(20);
  fill(0);
  text("G",40,110);
}

function draw() {
  background(redSlider.value(),greenSlider.value(),blueSlider.value());
  diffShapes=radio.value();
  if (diffShapes===1){
    rect(windowWidth/2,windowHeight/2,250,250);
  }
  else{
    ellipse(windowWidth/2,windowHeight/2,250,250);
  }
}

function radioButtons(){
  radio = createRadio();
  radio.option("rect",1);
  radio.option("ellipse",2);
  textAlign(CENTER);
  fill(255, 0, 0);
}

