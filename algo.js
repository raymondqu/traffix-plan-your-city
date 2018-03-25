
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
var score = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  
function congest(){
  
  if (mouseIsPressed) {
    score = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      if(arr[i][j].s == building_image){
          var Arr = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
          dfs(i, j, arr[i][j].p, 0, Arr);
      }
    }
  }
  for(var i = 0; i < score.length; i++){
  var string = ""
   for(var j = 0; j < score[i].length; j++){
     if(arr[i][j].s == building_image){
       string += "-1" + "\t"
     }else{
       string += score[i][j] + "\t"
     }
  
   }
   console.log(string)
  }
  return score;
  }
}


function dfs(x, y, weight, count, dist){
  dist[x][y] = 1;
  var val = 0;
  
  if(arr[x][y].s == building_image && count > 0){
    return weight;
  }else if(arr[x][y].s != blank_image){
    count++;
    if(y > 0){
      if(arr[x][y-1].s != blank_image && dist[x][y-1] == 0){
          val += dfs(x, y-1, weight, count, dist);
      }
    }
    if(y < arrHeight-1){
      if(arr[x][y+1].s != blank_image && dist[x][y+1] == 0){
          val += dfs(x, y+1, weight, count, dist);
      }
    }
    if(x > 0){
      if(arr[x-1][y].s != blank_image && dist[x-1][y] == 0){
          val += dfs(x-1, y, weight, count, dist);
      }
    }
    if(x < arrWidth-1){
      if(arr[x+1][y].s != blank_image && dist[x+1][y] == 0){
          val += dfs(x+1, y, weight, count, dist);
      }
    }
  }
  console.log(x+" "+y+" "+val);
  score[x][y] += val;
  return val;
}
/*
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
*/