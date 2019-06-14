// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const COLUMS=5;
const ROWS=5;
const TILE_SIZE=100;
let playerX=3;
let playerY=4;

let tiles=[]; //0 blank,1 chick,2 cow
let level=[
  [0,1,0,1,0],
  [1,1,1,0,0],
  [0,0,1,1,0],
  [1,0,0,1,1],
  [0,0,1,2,1]
];

function preload(){
  for (let i=0; i<3;i++){
    tiles.push(loadImage("assets/"+i+".png"));
  }
}
function setup() {
  createCanvas(COLUMS*TILE_SIZE, ROWS*TILE_SIZE);
}
function renderGame(){
  for (let y=0;y<ROWS;y++){
    for (let x=0;x<COLUMS;x++){
      let index=level[y][x];
      image(tiles[index],x*TILE_SIZE,y*TILE_SIZE);
    }
  }
}

function swap(x1,y1,x2,y2){
  let temp=level[y1][x1];
  level[y1][x1]=level[y2][x2];
  level[y2][x2]=temp;
}
function keyPressed(){
  if (keyCode===LEFT_ARROW){
    if (playerX>1){
      if (level[playerY][playerX-1]===0){
        swap(playerX,playerY,playerX-1,playerY);
      }
      else if (level[playerY][playerX-1]===1){
        if (level[playerY][playerX-2]===0){
          swap(playerX-1,playerY,playerX-2,playerY);
          swap(playerX,playerY,playerX-1,playerY);
        }
    }
    }
    

}
}
function draw() {
  background(220);
  renderGame();
 

}