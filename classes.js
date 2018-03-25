function Blank(is) {
  this.s = is; //image
}

function Road(is, iv, iup, idown, ileft, iright) {
  this.s = is; // image 
  this.v = iv; // "value" 
  this.up = iup; // if the road connects up
  this.down = idown; // if the road connects down
  this.left = ileft; // if the road connects left
  this.right = iright; //if the road connects right
}

function Buildings(is, ip) {
  this.s = is; // image
  this.p = iv; // population of the residential zone
}

