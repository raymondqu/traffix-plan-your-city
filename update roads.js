function updateRoads(arr) {
	for (var x = 0; x < arr.length; x++) {
		for (var y = 0; y < arr[x].length; y++) {
			current_road = arr[x][y]
		
			if (current_road.v == "Road") {
			
				if (y != 0) {
					if (arr[x][y-1].v == "Road") {
						arr[x][y-1].down = true
						current_road.up = true
					}
				}
				
				if (y != arr[x].length - 1) {
					if (arr[x][y+1].v == "Road") {
						arr[x][y+1].up = true
						current_road.down = true
					}
				} 
				if (x !=  0) {
					if (arr[x-1][y].v == "Road") {
						print('yoo')
						arr[x-1][y].right = true
						current_road.left = true
					}
				}
				if (x != arr.length-1) {
					if (arr[x+1][y].v == "Road") {
						arr[x+1][y].left = true;
						current_road.right = true;
					}
				}
				if (current_road.up || current_road.down) {
					print('hehe')
					current_road.s = loadImage('sprites/vertical.png');
				}  if (current_road.up && current_road.left) {
					print('as')
					current_road.s = loadImage('sprites/leftup.png');
				}  if (current_road.down && current_road.left) {
					current_road.s = loadImage('sprites/leftdown.png');
				}  if (current_road.up && current_road.right) {
					print('heck')
					current_road.s = loadImage('sprites/rightup.png');
				}  if (current_road.right && current_road.down) {
					current_road.s = loadImage('sprites/rightdown.png');
				}  if (current_road.left && current_road.right && current_road.down) {
					current_road.s = loadImage('sprites/t-intersect - left right down.png');
				}  if (current_road.up && current_road.left && current_road.down) {
					current_road.s = loadImage('sprites/t-intersect - up left down.png');
				}  if (current_road.up && current_road.right && current_road.down) {
					current_road.s = loadImage('sprites/t-intersect - up right down.png');
				}  if (current_road.up && current_road.left && current_road.right) {
					current_road.s = loadImage('sprites/t-intersect - up left right.png');
				}  if (current_road.up && current_road.down && current_road.left && current_road.right) {
					current_road.s = loadImage('sprites/intersection.png');
				}
				
			}
		}
	}
}
