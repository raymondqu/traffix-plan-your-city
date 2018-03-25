var img;  // Declare variable 'img'.

function setup() {
  createCanvas(720, 400);
  img = loadImage("sprites/car.png");  // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  if (mouseIsPressed){
    image(img, mouseX, mouseY);

  }

}
