//Refactor No.4
//Chess Board

let x=0;                  //starting x pos.
let rectNum=0;           //value holds the number of rects

let isNextBlack=false;  //these 2 statements will help tell what the next square is, defualt values are chosen
let isNextWhite=true;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  firstRow();
}

function firstRow(){
  for (let y=0;y<600;y=y+75){             //y value is the displacement of another row after one is completed
    x=0;                                  //resets the x value soo it starts from begining 
    for (rectNum=0;rectNum<9;rectNum++){  //loop creates only 1 row of 8 squares
      if (isNextWhite===true){            //statements dictates which color of square comes next
        fill(255);
        rect(x,y,75,75);
        x=x+75;
        isNextBlack=true;
        isNextWhite=false;
      }
      else if (isNextWhite===false) {     //statements dictates which color of square comes next
        fill(0);
        rect(x,y,75,75);
        x=x+75;
        isNextBlack=false;
        isNextWhite=true;
      }
    }
  }
}
