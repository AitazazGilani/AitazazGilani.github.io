
// code for a moving rectangle in random directions


let xValue=200; //controls the X coordinate of rect
let yValue=300; //controls y coordinate of rect
let randomXvalue; // controls the random direction it will go in the x dir
let randomYvalue;//controls the random direction it will go in the y dir

function setup() {
  createCanvas(windowWidth, windowHeight);
  randomXvalue=random(3,8);
  randomYvalue=random(3,8); //random values to make it random
}
function draw() {
  movingSquare();
  background(80,80,80);
  rect(xValue,yValue,250,75); //the moving rect
}
function movingSquare(){ //code that will control which direction it will move in
  xValue+=randomXvalue;  
  yValue+=randomYvalue;
  if (yValue>=height-75||yValue<=0){ //will control the limit of where it can go in y dir
    randomYvalue=randomYvalue*-1;
  }
  else if (xValue>=width-250||xValue<=0){ //will control the limit of where it can go in x dir
    randomXvalue=randomXvalue*-1;
  }
}