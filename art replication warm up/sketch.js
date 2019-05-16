// Art replication warm up
// Aitazaz Gilani
// 15/4/19

let y=0; // value will hold the y values for the sine graph
let xDisplacement=1080/2; // x displacement for where the graph should be in x axis
let amp=20; //amplitude value for graph
let period=60; //length of a curve

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(1.25);
  sineGraphLoop();
}


function sineGraphLoop(){
  for (let yDisplacement=-150;yDisplacement<= 150; yDisplacement+=4) { // loop will displace the graph after each time is drawn in y dir
    for (let x=70;x< 460 ;x+=1){  // loop that will create 1 graph, creates a straight line but the y value is what creates the graph
      y = height/2+amp*Math.sin(x/period); // formula that calculates the y values for the graph
      point(x+xDisplacement,y+yDisplacement); 
      period-=0.1; // variable that controls the decreasing period as it goes
    }
    period=60; // retured to default value after 1 graph is made
  }
}
  
