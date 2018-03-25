var build = 1
var empty = 0
var road = 2
var score;
var connectup, connectdown, conectleft, connectright;


var map = [
  [1, 2, 2, 2, 1],
  [0, 0, 2, 0, 1],
  [2, 2, 2, 2, 2],
  [0, 0, 2, 0, 1],
  [0, 0, 1, 0, 0]
];
var score = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

var pop = [
  [10, 0, 0, 0, 10],
  [0, 0, 0, 0, 10],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 10],
  [0, 0, 10, 0, 0]
];
var speed = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];
/*
for (var i = 0; i < 5; i++) {

  for (var k = 0; k < 5; k++) {
    if (map[i][k] = 2) {
      score = pop[i + 1][k] + pop[i - 1][k] + pop[i][k + 1] + pop[i][k - 1]
      + 0.75*(pop[i+1][k+1] + pop[i+1][k-1] + pop[i-1][k+1] + pop[i-1][k-1]);
      if ()

    }
  }
}
*/

for(var i = 0; i < map.length; i++){
  for(var j = 0; j < map[i].length; j++){
    if(map[i][j] == 1){
        var Arr = [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ];
        dfs(i, j, pop[i][j], 0, Arr);
    }
  }
}

function dfs(x, y, weight, count, arr){
  arr[x][y] = 1;
  var val = 0;
  if(map[x][y] == 1 && count > 0){
    return weight;
  }else if(map[x][y] > 0){
    count++;
    if(y > 0){
      if(map[x][y-1] > 0 && arr[x][y-1] == 0){
          val += dfs(x, y-1, weight, count, arr);
      }
    }
    if(y < 4){
      if(map[x][y+1] > 0 && arr[x][y+1] == 0){
          val += dfs(x, y+1, weight, count, arr);
      }
    }
    if(x > 0){
      if(map[x-1][y] > 0 && arr[x-1][y] == 0){
          val += dfs(x-1, y, weight, count, arr);
      }
    }
    if(x < 4){
      if(map[x+1][y] > 0 && arr[x+1][y] == 0){
          val += dfs(x+1, y, weight, count, arr);
      }
    }
  }
  score[x][y] += val;
  return val;
}

for(var i = 0; i < score.length; i++){
  var string = ""
  for(var j = 0; j < score[i].length; j++){
    string += map[i][j] + "\t"
  }
  console.log(string)
}
console.log()
for(var i = 0; i < score.length; i++){
  var string = ""
  for(var j = 0; j < score[i].length; j++){
    if(map[i][j] == 1){
      string += "-1" + "\t"
    }else{
      string += score[i][j] + "\t"
    }

  }
  console.log(string)
}
