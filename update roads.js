function updateRoads() {
	for (var x = 0; x < arr.length(); x++) {
		for (var y = 0; y < arr[x].length(); y++) {
			current_road = arr[x][y]
			if (current_road == road) {
				if (y != 0) {
					if (arr[x][y-1] == road) {
					arr[x][y-1].right = true
					current_road.left = true
					}
				}
				if (y != arr[x].length() - 1) {
					if (arr[x][y+1] == road) {
					arr[x][y+1].left = true
					current_road.right = true
					}
				}
				if (x !=  0) {
					if (arr[x-1][y] == road) {
						arr[x-1][y].down == true
						current_road.up == true
					}
				}
				if (x != arr.length()-1) {
					if (arr[x+1][y] == road) {
						arr[x+1][y].up == true
						current_road.down == true
					}
				}
				if (current_road.up) {

				}
			left_road = arr[x][y-1]
			right_road = arr[x][y+1]
			up_road = arr[x-1][y]
			down_road = arr[x+1][y]
			}
		}
	}
}
