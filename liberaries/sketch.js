// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let mySound,reverb;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/energy.mp3');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  mySound.setVolume(0.1);
 // mySound.play();
  reverb=new p5.Reverb();

}
function mousePressed(){
  mySound.play();
}
function draw() {
  background(220);
}
