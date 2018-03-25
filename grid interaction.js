function blockInteract(arr) {
  var x = mouseX + viewX;
  var y = mouseY + viewY;

  //changes grid
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      if (floor(x / gridSize) < arrWidth && floor(x / gridSize) >= 0 && floor(y / gridSize) < arrHeight && floor(y / gridSize) >= 0) {
        //changes the object once it clicks
        if (placeMode == 'divided road') {
          arr[floor(x / gridSize)][floor(y / gridSize)] = new Road(dividedRoad);
        } else if (placeMode == 'big road') {
          road.s = loadImage('sprites/bigroad.png');
          arr[floor(x / gridSize)][floor(y / gridSize)] = new Road(bigRoad);
         
        }
      }
    }
  }
}
var barHeight = 50;
var tabHeight = 30;
var tabWidth = 100;
var topY = window.innerHeight - barHeight;
var barMode = 'road';
var placeMode = 'divided road'

function placeBar() {
  rect(0, topY, window.innerWidth, barHeight);
  rect(0, topY - tabHeight, tabWidth, tabHeight);
  rect(tabWidth, topY - tabHeight, tabWidth, tabHeight);

  text('Roads', tabWidth / 3, topY - tabHeight / 3);
  text('Traffic controls', tabWidth * 1.1, topY - tabHeight / 3);

  //change bar mode
  x = mouseX;
  y = mouseY;
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      if (x < tabWidth + tabWidth && x > tabWidth) {
        if (y < topY - tabHeight + tabHeight && y > topY - tabHeight) {
          barMode = 'traffic control';
        }
      } else if (x < tabWidth && x > 0) {
        if (y < topY - tabHeight + tabHeight && y > topY - tabHeight) {
          barMode = 'road';
        }
      }
    }
  }
  if (barMode == 'road') {
    image(dividedRoad, 15, topY * 1.02, 30, 30);
    image(bigRoad, 60, topY * 1.02, 30, 30);
    //update 
    if (mouseIsPressed && mouseButton == LEFT) {
      if (x > 15 && x < 45 && y > topY * 1.02 && y < topY * 1.02 + 30) {
        placeMode = 'divided road'
      }
    }
    if (mouseIsPressed && mouseButton == LEFT) {
      if (x > 60 && x < 90 && y > topY * 1.02 && y < topY * 1.02 + 30) {
        placeMode = 'big road';
        print(placeMode);
      }
    }
  }
}