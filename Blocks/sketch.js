var school;
var car;

function setup() {
  createCanvas(500, 500);
  
  car = loadImage('car.png');
  school = new Blocks(car, 1);
}

function draw() {
  image(school.s, 200, 200);
}

function Blocks(is, iv) {
  this.s = is; // image 
  this.v = iv; // "value" 
}