// State Variables Rollovers
// Aitazaz Gilani
// March 11,2019
//
// Extra for Experts:
// -


let fadeQuad1=255; //these four commands hold the default color of squares
let fadeQuad2=255;
let fadeQuad3=255;
let fadeQuad4=255;


function setup() {
  createCanvas(500,500); // screen is 500x500 to make things simpler.

}
// the system uses the normal quardrant system used in graphing
function draw() {
  background(355);
  line(windowWidth/2,0,250,500);
  line(0,windowHeight/2,500,250);
  quad1();
  quad2();
  quad3();
  quad4();


}
function quad1(){                     // upper right
  fill(fadeQuad1);
  rect(250,0,250,250);
  if (mouseX>=250 && mouseY<250 ){
    fadeQuad1=0;

  }
  else{
    fadeQuad1+=12;
  }
}

function quad2(){                     // upper left
  fill(fadeQuad2);
  rect(0,0,250,250);
  if (mouseX<250 && mouseY<=250){
    fadeQuad2=0;
    
  }
  else{
    fadeQuad2+=12;
  }
}

function quad3(){                     // down left
  fill(fadeQuad3);
  rect(0,250,250,250);
  if (mouseX<=250 && mouseY>250 ){
    fadeQuad3=0;
    
    
  }
  else{
    fadeQuad3+=12;
  }
}

function quad4(){                     // down right
  fill(fadeQuad4);
  rect(250,250,250,250);
  if (mouseX>250 && mouseY>=250 ){
    fadeQuad4=0;
    
  }
  else{
    fadeQuad4+=12;
  }
}
