//diagnol line generator
const spacing=10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {

  for (let x=spacing/2;x<width-spacing/2;x+=spacing){
    for (let y=spacing/2;y<height-spacing/2;y+=spacing){
      if (int(random(2))===0){
        diagonalDeccend(x,y,spacing);
        
      }
      else {
        diagonalAccend(x,y,spacing);
        
      }
    }
  }
}


function diagonalAccend(x,y,s){
  stroke(255);
  line(x-s/2,y+s/2,x+s/2,y-s/2);
}

function diagonalDeccend(x,y,s){
  strokeWeight(5);
  line(x-s/2,y-s/2,x+s/2,y+s/2);
}