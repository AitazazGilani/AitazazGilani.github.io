// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let values=[30,20,0,6,29];
const ARRAY_SIZE=1000;
function setup() {
  noCanvas();
  noLoop();
  populateArray();
}
function populateArray(){
  for (let i=0;i<ARRAY_SIZE;i++){
    values.push(int(random(1000)));
  }
}

function selectionValues(){
  for (let index=0;index<values.length-1;index++){
    let minimum=values[index];
    let minimumLoc=index;
    for(let checkIndex=index+1;checkIndex<values.length;checkIndex++){
      let cur=values[checkIndex];
      if (cur<minimum){
        minimum=cur;
        minimumLoc=checkIndex;
      }
      let temp=values[index];
      values[index]=values[minimumLoc];

    }
  }
}


function draw() {
  print(values);
  selectionValues();
  print(values);
}
