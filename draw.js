function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  forest = loadImage('forest.png')
}

var forest;

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
      
      //rect(i*size-viewX, j*size-viewY, size, size);
      image(forest, i*size-viewX, j*size-viewY, size, size)
    } 
  }
}

function placeTab(){
  if(mouseIsPressed) {
    
  }
}

function blockInteract(){
  
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
           [0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0]];

function draw() {
  
  moveScreen();
  grid(arr, gridSize);
  placeTab();
  
  
}