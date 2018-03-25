function Blank(is) {
  this.s = is; //image
}

function Road(is, iup, idown, ileft, iright, iv) {
  this.s = is; // image 
  this.up = iup; // if the road connects up
  this.down = idown; // if the road connects down
  this.left = ileft; // if the road connects left
  this.right = iright; //if the road connects right
  this.v = iv; // should be "Road"
}

function Buildings(is, ip) {
  this.s = is; // image
  this.p = iv; // population of the residential zone
}

