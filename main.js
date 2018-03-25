var gridSize = 100;
var zoomSpeed = 10;

var viewX = 0;
var viewY = 0;

var viewSpeed = 10;

var arrWidth = 10;
var arrHeight = 10;

var dividedRoad;
var bigRoad;

var road;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  background(255);

  blank_image = loadImage('sprites/blank.png');
  blank = new Blank(blank_image);
  
  arr = gridInit(arrWidth, arrHeight);

  dividedRoad = loadImage('sprites/leftrightroad.png');
  bigRoad = loadImage('sprites/bigroad.png');

  road = new Road(dividedRoad, 50);
}

function draw() {

  background(0);

  moveScreen();
  blockInteract(arr);
  grid(arr, gridSize);
  placeBar();
  updateRoads();
}