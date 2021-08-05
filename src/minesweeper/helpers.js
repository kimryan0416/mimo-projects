function generateArray(width, height) {
 const boxes = [];
 for (var x = 0; x < width; x++) {
  boxes.push([]);
  for (var y = 0; y < height; y++) {
   boxes[x][y] = {
    x:x,
    y:y,
    isMine:false,
    isRevealed:false,
    isEmpty:false,
    neighbors:0,
   }
  }
 }
 return boxes;
}

function plantMines(boxes, width, height, mines, startWith) {

 const randNum = (min, max) => { 
  return Math.floor(Math.random() * (max - min + 1) + min);
 }

 var planted = 0;
 while (planted < mines) {
  var x = randNum(0,width-1);
  var y = randNum(0,height-1);
  if (
   !boxes[x][y].isMine && 
   x != startWith.x && 
   y != startWith.y
  ) {
   boxes[x][y].isMine = true;
   planted++;
  }
 }
 return boxes;
}

function findNeighbors(boxes, width, height, x, y) {
 var neighbors = [];
 for (var i = x-1; i <= x+1; i++) {
  if (i<0 || i>=width) continue;
  for (var j = y-1; j <= y+1; j++) {
   if (j<0 || j>=height) continue;
   if (i==x && j==y) continue;
   neighbors.push(boxes[i][j])
  }
 }
 return neighbors;
}

function getNeighbors(boxes, width, height) {
 var updatedBoxes = boxes;
 for (var x = 0; x < width; x++) {
  for (var y = 0; y < height; y++) {
   let box = boxes[x][y];
   if (!box.isMine) {
    let mines = 0;
    let neighbors = findNeighbors(
     boxes,
     width,
     height,
     box.x, box.y
    );
    neighbors.forEach(n=>{
     if (n.isMine) mines++;
    });
    if (mines == 0) {
     updatedBoxes[x][y].isEmpty = true;
    }
    updatedBoxes[x][y].neighbors = mines;
   }
  }
 }
 return updatedBoxes;
}

function getHidden (board, width, height) {
 var hidden = [];
 for(var x = 0; x < width; x++) {
  for (var y = 0; y < height; y++) {
   if (!board[x][y].isRevealed) {
    hidden.push(board[x][y]);
   }
  }
 }
 return hidden;
}

function revealEmpty(board, width, height, x, y) {
 var neighbors = findNeighbors(board, width, height, x, y);
 neighbors.forEach(n=>{
  if (
   !n.isRevealed && 
   (n.isEmpty || !n.isMine)
  ) {
   board[n.x][n.y].isRevealed = true;
   if (n.isEmpty) revealEmpty(
    board, 
    width,
    height,
    n.x, n.y
   );
  }
 });
 return board;
}

function revealAll(board, width, height) {
 for (var x = 0; x < width; x++) {
  for (var y = 0; y < height; y++) {
   board[x][y].isRevealed = true;
  }
 }
 return board;
}


export {
    generateArray,
    plantMines,
    findNeighbors,
    getNeighbors,
    getHidden,
    revealEmpty,
    revealAll,
}