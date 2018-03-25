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

var building;


function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  background(255);

  blank_image = loadImage('sprites/blank.png');
  blank = new Blank(blank_image);
  
  building_image = loadImage('sprites/building.png');
  building = new Building(building_image, 20);
  building1 = new Building(building_image, 100);
  arr = gridInit(arrWidth, arrHeight);
  arr[0][0] = building;
  arr[0][4] = building;
  arr[4][2] = building1;
  
  

  dividedRoad = loadImage('sprites/horizontal.png');
  bigRoad = loadImage('sprites/horizontal.png');

  road = new Road(dividedRoad, 50);
  
  

}

function draw() {

  background(0);

  moveScreen();
  blockInteract(arr);
  grid(arr, gridSize);
  placeBar();
  congest();
  
  //updateRoads(arr);
}