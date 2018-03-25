var game = true;
var start = true;  // Declare variable 'img'.
var play = false;
var end = false;

function setup() {
  createCanvas(1280, 720);
  start_img = loadImage("background/start.png");  // Load the image
  play_img = loadImage("background/gameplay.png");
  end_img = loadImage("background/ending.png");
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  while (game){
    while(start){
      image(start_img, 0, 0);
    }
    while(play){
      image(play_img, 0, 0);
    }
  }

  
}