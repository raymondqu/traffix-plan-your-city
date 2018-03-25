var blank;

function gridInit(x, y) { //x represents the number of width grids, y represents height grids
  var arr = [];
  
  for (var i = 0; i < x; i++) {
    var arr2 = [];
    for (var j = 0; j < y; j++) {
      arr2.push(blank);
    }
    arr.push(arr2);
  }
  return arr;
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  topY = h-barHeight
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

