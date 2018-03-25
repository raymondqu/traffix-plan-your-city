var car;
var blank;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  forest_image = loadImage('sprites/car.png');
  forest = new Blank(forest_image);
  
  blank_image = loadImage('blank.png');
  blank = new Blank(blank_image);
  
  arr = gridInit();
  
}

function gridInit() {
  var arr = [];
  
  for (var i = 0; i < 5; i++) {
    var arr2 = [];
    for (var j = 0; j < 5; j++) {
      arr2.push(blank);
    }
    arr.push(arr2);
  }
  return arr;
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w, h);
  width = w;
  height = h;
};


function grid(array, size) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      var bloc;
      bloc = array[i][j]

      image(bloc.s, i * size - viewX, j * size - viewY, size, size);
    }
  }
}


function placeTab() {

}

function blockInteract(arr) {
  var x = mouseX + viewX;
  var y = mouseY + viewY;

  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      if (floor(x / gridSize) < arrWidth && floor(x / gridSize) >= 0 && floor(y / gridSize) < arrHeight && floor(y / gridSize) >= 0) {
        arr[floor(x / gridSize)][floor(y / gridSize)] = forest;
      }
    }
  }

}



function mouseWheel(event) {
  if (event.delta > 0) {
    gridSize += zoomSpeed;
  }
  if (event.delta < 0) {
    gridSize -= zoomSpeed;
  }
  if (gridSize < 30) {
    gridSize = 30;
  }
  if (gridSize > 100) {
    girdSize = 100;
  }
}

function moveScreen() {
  var x = mouseX;
  var y = mouseY;

  if (x < window.innerWidth * 0.05 && viewX - viewSpeed >= 0) {
    viewX -= viewSpeed;
  }

  if (x > window.innerWidth * 0.95) {
    viewX += viewSpeed;
  }

  if (y < window.innerHeight * 0.05 && viewY - viewSpeed >= 0) {
    viewY -= viewSpeed;
  }

  if (y > window.innerHeight * 0.95) {
    viewY += viewSpeed;
  }
}

var gridSize = 100;
var zoomSpeed = 10;

var viewX = 0;
var viewY = 0;

var viewSpeed = 10;

var arrWidth = 5;
var arrHeight = 5;

function draw() {

  background(0);

  moveScreen();
  blockInteract(arr);
  grid(arr, gridSize);
  placeTab();
  

}