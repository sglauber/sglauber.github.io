let lineOffsetY = 10; 
let archOffsetX = 11, archOffsetY = 11;
let textOffset = 35;

function showScore(){
  textSize(55);
  noStroke();
  fill('#454545');

  //RIGHT Score
  textAlign(RIGHT, TOP);
  text('PING ' + teamA.score, width/2 - textOffset, textOffset - 25);
  
  //LEFT Score
  textAlign(LEFT, TOP);
  text(teamB.score + ' PONG', width/2 + textOffset, textOffset - 25);
}

function setArcs(){
  let archRadius = 50;
  //top-left
  arc(archOffsetX, archOffsetY, archRadius, archRadius, 0, 90); 
  //bottom-left
  arc(archOffsetX, height - archOffsetY, archRadius, archRadius, -90, 0);
  //top-right
  arc(width - archOffsetX, archOffsetY, archRadius, archRadius, 90, 180);
  //bottom-right
  arc(width - archOffsetX, height - archOffsetY, archRadius, archRadius, 180, -90);
}

function setAreas(){
  let squareH = 50;
  //left area
  // whats better a rectangle or three line objects? 
  // hmmm, really makes me think
  rect(5, height/2 - 35, 2,70); //goal square
  rect(10, 125, squareH,150); //small square left
  rect(10, 100, squareH * 2, squareH * 4); //big square left
 
  arc(110,height/2,35,75,-90, 90); //arch
  circle(85,height/2, 3); //penalty

  //right area
  rect(width - 5, height/2 - 35, 2,70); //goal square
  rect(width - (squareH + 10), 125, squareH,150); //small square left
  rect(width - (squareH + 60), squareH * 2, 100,squareH * 4); //big square left
  
  arc(width - 110, height/2,45,65,90, -90); //arch left
  circle(width - 85,height/2, 3); //penalty
  
  circle(width/2,height/2, 3); //center point
}

function setBorders(){
  //drawing the board elements
  rect(10, 10, width - 20, height - 20);//board rectangle
  line(width/2, height - lineOffsetY, width/2, lineOffsetY);//middle line
  circle(width/2,height/2,65); //middle circle
}

//The set function are defined separatadly so the mode() is applyable to its scope;
function createBoard(){
  //rectMode(CENTER);
  angleMode(DEGREES);
  noFill();
  strokeWeight(2);
  stroke('#ffffff');
  
  setAreas();
  setArcs();
  setBorders();
  showScore();
}