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
//drawing different screens
  if (game){
    if(start){
      image(start_img, 0 ,0);
      if (mouseIsPressed){
        play = true;
        start = false;
      }
    }
    else if(play){
      image(play_img, 0, 0);
      if (mouseIsPressed){
        play = false;
        start = false;
        end = true
      }
    }
    else if (end){
      image(end_img, 0, 0);
      
    }
  }
}