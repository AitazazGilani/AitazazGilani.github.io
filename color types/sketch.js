//color solutions demo

let rectWidth=10;
let rectHeight=300;
let colors=["#92A6D0","7C97D0","2E4F93","1C305A","152444"];
function setup() {
  createCanvas(windowWidth, windowHeight);
  drawRowPallet(height/2);
}
function drawRowRgb(yPos){
  colorMode(RGB);
  for (let x=0;x<width;x+=rectWidth){
    fill(random(255),random(255),random(255));
    rect(x,yPos,rectWidth,rectHeight);
  }
}
function drawRowPallet(yPos){
  colorMode(RGB);
  let counter=0;
  for (let x=0;x<width;x+=rectWidth){
    fill(colors[counter]);
    fill(colors[int(random())])
    rect(x,yPos,rectWidth,rectHeight);
    counter++;
  }
}

function drawRowHSB(yPos){
  colorMode(HSB,360);
  for (let x=0;x<width;x+=rectWidth){
  //fill(hue,saturation,brightness)
    fill(x/10 %360,280,330);
    rect(x,yPos,rectWidth,rectHeight);
  }
}






function draw() {
}
