// Generative Art Design
// Aitazaz Gilani
// Monday 13th May,2019
// the picture i tried creating seemed easy to make but when i created the first prototype i realized there were other generative details the picture
//had which seemed very challenging, i attempted at creating them but by mistake i created this and it looked nice to me.


const H=20; // height of squares 
const W=20; // width of squares 
const POSTER_WIDTH=3000; //canvas width
const POSTER_HEIGHT=4500; //canvas height
const MAX_DARK_SQUARES=50; //value holds how many can dark squares be before the fill is reset 

let pushToX=30; // controls the amount of space between squares in x dir
let pushToY=30; //controls the amount of space between squares in y dir
let decreasingFill=220; //default fill for the squares, value will keep a hold of the fill values
let fillCounter=0; //keeps a track of how many times has the fill decreased since the fill decreases at random values

function setup(){
  createCanvas(POSTER_WIDTH,POSTER_HEIGHT);
  noLoop();
}

function draw() {
  background(0);
  descendingSquares();
}

function descendingSquares(){
  for (let x = 0; x < POSTER_WIDTH; x += pushToX) { //x will hold the x locations of squares and 
    decreasingFill=220; //resets the color after one time the loop in dir happens
    for (let y=0;y<POSTER_HEIGHT;y+=pushToY){ // y will hold the y locations of squares
      fill(decreasingFill);
      rect(x,y,H,W);
      decreasingFill=decreasingFill-random(1,7); //the amount of how much the color will accend to black is randomly determined
      if (decreasingFill<25){ //if the number of fill gets too small it reduces the number of how much it decreases by
        decreasingFill=decreasingFill-random(1,2);
        if (decreasingFill<0){ //the if statement exists soo the fill value doesnt go in the negatives
          decreasingFill=0;
        }
        fillCounter++;
        if (fillCounter>MAX_DARK_SQUARES){ //acts as a reset for fill within the y dir, creates the repeating pattern
          decreasingFill=220;
        }
      }
    }
  }
}

function keyPressed(){ //function to capture screenshots
  if (key === " "){
    save();
  }
}
 

