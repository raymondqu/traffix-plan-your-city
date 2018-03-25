function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  forest = loadImage('forest.png');
  blank = loadImage('blank.png');
  building = loadImage('building.png');
  
}

var forest;
var blank;
var building;

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  canvas.size(w,h);
  width = w;
  height = h;
};


function grid(array, size){
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      var bloc;
      switch (arr[i][j]){
        case 0:
          bloc = blank;
          break;
        case 1:
          bloc = forest;
          break;
        
      }
      image(bloc, i*size-viewX, j*size-viewY, size, size);
    } 
  }
}

var barHeight = 50;
var tabHeight = 30;
var tabWidth = 100;
var topY = window.innerHeight-50;

function placeBar(){
  rect(0, topY, window.innerWidth, barHeight);
  rect(0, topY-tabHeight, tabWidth, tabHeight);
  rect(tabWidth, topY-tabHeight, tabWidth, tabHeight);
}

function blockInteract(){
  var x = mouseX+viewX;
  var y = mouseY+viewY;
  
  if(mouseIsPressed) {
    if(mouseButton == LEFT){
      if(floor(x/gridSize) < arrWidth && floor(x/gridSize) >= 0 && floor(y/gridSize) < arrHeight && floor(y/gridSize) >= 0){
          arr[floor(x/gridSize)][floor(y/gridSize)] = 1;
      }
    }
  }
  
}



function mouseWheel(event) {
  if(event.delta > 0){
    gridSize += zoomSpeed;
  }
  if(event.delta < 0){
    gridSize -= zoomSpeed;
  }
  if(gridSize < 30){
      gridSize = 30;
  }
  if(gridSize > 100){
    girdSize = 100;
  }
}

function moveScreen(){
  var x = mouseX;
  var y = mouseY;
  
  if(x < window.innerWidth*0.05 && viewX-viewSpeed >= 0){
    viewX -= viewSpeed;
  }
  
  if(x > window.innerWidth*0.95){
    viewX += viewSpeed;
  }
  
  if(y < window.innerHeight*0.05 && viewY-viewSpeed >= 0){
    viewY -= viewSpeed;
  }
  
  if(y > window.innerHeight*0.95){
    viewY += viewSpeed;
  }
}

var gridSize = 100;
var zoomSpeed = 10;

var viewX = 0;
var viewY = 0;

var viewSpeed = 10;

var arr = [[0, 0, 0, 0, 0, 0],
           [0, 1, 0, 0, 0, 0],
           [0, 0, 1, 0, 0, 0],
           [0, 0, 0, 1, 0, 0],
           [0, 0, 0, 0, 0, 0]];
           
var arrWidth = 5;
var arrHeight = 5;

function draw() {
  
  moveScreen();
  grid(arr, gridSize);
  placeBar();
  blockInteract();
  
}

  
  
