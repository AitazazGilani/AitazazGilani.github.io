// Grid Demo
const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow,currentCol;
let gridData = [[0,0,0,255,0],
                [255,0,255,0,255],
                [0,255,0,0,0],
                [0,0,255,0,255]];
let randomFill;
let randomGrid=[];
let randomFillValue;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  noLoop();
}
function randomizedGrid(){
  for (let y = 0; y < NUM_ROWS; y++){
    randomGrid.push([]);
    
    for (let x = 0; x < NUM_COLS; x++){
      randomFill=int(random(0,2));
      if (randomFill===1){
        randomFillValue=0;
      }
      else{
        randomFillValue=255;
      }
      randomGrid[y].push(randomFillValue);
      randomFill=int(random(0,2));
    }
  }
  print(randomGrid);
}
function draw() {
  background(220);
  randomizedGrid();
  drawGrid();
  determineRect();
}



function drawGrid(){
  // Render a Grid of Squares - fill color set 
  // According to data stored in 2D array.
  for (let y = 0; y < NUM_ROWS; y++){
    randomFill=random(0,1);
    for (let x = 0; x < NUM_COLS; x++){
      randomFill=random(0,1);
      if (randomFill===1){
        fill(0);
      }
      else{
        fill(255);
      }
      fill(randomGrid[y][x]);
      rect(x*rectWidth,y*rectHeight,rectWidth,rectHeight);
    }
  }
}
function determineRect(){
  currentRow=int(mouseY/rectHeight);
  currentCol=int(mouseX/rectWidth);
  //print(currentRow,currentCol);
}
function mousePressed(){
  flip(currentCol,currentRow);
  // flip(currentCol-1,currentRow);
  // flip(currentCol+1,currentRow);
  // flip(currentCol,currentRow-1);
  // flip(currentCol,currentRow+1);
}
function flip(col,row){
  if (col>=0 && col<NUM_COLS && row>=0 && row<NUM_ROWS ){
  if (randomGrid[row][col]===0){ //gridData[row][col]===0
    randomFill=1;
  }
  else{
    randomFill=0;
  }
  }
}




