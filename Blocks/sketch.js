var school;
var car;
var r1;

function setup() {
  createCanvas(500, 500);

}

function draw() {
}

function Road(is, iv) {
  this.s = is; // image 
  this.v = iv; // "value" 
}

function Buildings(is, ip) {
  this.s = is; // image
  this.p = iv; // population of the residential zone
}