function blockInteract(arr) {
  var x = mouseX + viewX;
  var y = mouseY + viewY;

  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      if (floor(x / gridSize) < arrWidth && floor(x / gridSize) >= 0 && floor(y / gridSize) < arrHeight && floor(y / gridSize) >= 0) {
        //changes the object once it clicks
        //arr[floor(x / gridSize)][floor(y / gridSize)] = forest;
      }
    }
  }
}
