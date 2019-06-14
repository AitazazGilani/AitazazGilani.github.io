//Insert your Comment Header here.

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let randomFill;
let randomGrid=[];
let randomFillValue;
let whiteCounter=0;
let blackCounter=0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;
 
}

function draw() {
  background(220);
  randomArrays();
  determineActiveSquare();

  winOrLose();        
  drawGrid();   
 
         
}





function flip(col, row){
 
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (randomGrid[row][col] === 0){
        randomGrid[row][col] = 255;
        // isAllWhite+=1;
        // isAllBlack-=1;
      }
      else{ 
        randomGrid[row][col] = 0;
        // isAllWhite-=1;
        // isAllBlack+=1;
      }
    }
  }
}

function determineActiveSquare(){
 
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid(){

  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      fill(randomGrid[y][x]);

      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}

function randomArrays(){
  for (let y = 0; y < NUM_ROWS; y++){
    randomGrid.push([]);
    for (let x = 0; x < NUM_COLS; x++){
      randomFill=int(random(0,2));
      if (randomFill===1){
        randomFillValue=0;
        blackCounter+=1;
      }
      else{
        randomFillValue=255;
        whiteCounter+=1;
        
      }
      randomGrid[y].push(randomFillValue);
   
    }
  }

}

function winOrLose(){
  
  
}

function mousePressed(){
  if (mouseButton===LEFT){
    flip(currentCol, currentRow);
    flip(currentCol-1, currentRow);
    flip(currentCol+1, currentRow);
    flip(currentCol, currentRow-1);
    flip(currentCol, currentRow+1);
  }
  else if (mouseButton===CENTER){
    flip(currentCol, currentRow);
  }
}

// function totalOfArrayItems(){
//   for (let i=0;i<randomGrid[x].length;i++){
    
//   }
// }

// function randomArrays(){
//   for (let y = 0; y < NUM_ROWS; y++){
//     // isAllBlack=0;
//     // isAllWhite=0;
//     randomGrid.push([]);
//     for (let x = 0; x < NUM_COLS; x++){
//       randomFill=int(random(0,2));
//       if (randomFill===1){
//         randomFillValue=0;
//         isAllBlack=isAllBlack+1;
//         if (isAllWhite===0){
//           isAllWhite=0;
//         }
//         else{
//           isAllWhite=isAllWhite-1;
//         }
//       }
//       else{
//         randomFillValue=255;
//         isAllWhite=isAllWhite+1;
//         if (isAllBlack===0){
//           isAllBlack=0;
//         }
//         else{
//           isAllBlack=isAllBlack-1;
//         }
        
//       }
//       randomGrid[y].push(randomFillValue);
//       randomFill=int(random(0,2));
//     }
//   }
// }