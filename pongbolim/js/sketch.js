let ball;
let myFont;
let players = [];

function preload(){
  myFont = loadFont('montserrat.ttf');
}

function setup(){  
  textFont(myFont);
  createCanvas(600, 400);  
  
  //Setting up players objects and pushing it into the array
  /*!NoteForLife Giving the option for an object to be instantiated in another class seems to cause a lot of trouble */  
  players.push(
    {
      attacker: new Player(width - 250, height/2 - 50,10,100),
      defender: new Player(150, height/2 - 50,10,100),
      color: '#f50a0a'
    },
    {
      attacker: new Player(250, height/2 - 50,10,100),
      defender: new Player(width - 150, height/2 - 50,10,100),
      color: '#0079F8'
    }
  );
  
  teamA = new Team(players[0]);
  teamB = new Team(players[1]);
  ball = new Ball(width/2, height/2, 28);
  
  window.alert('This is a great example on: "How to not use Classes and Objects with JS properly", hope you enjoy it. Use "UP & DOWN" to move the red squares and "W & S" to move the blue ones');
  
}

function draw(){
  background('#292929');
  createBoard();
  playerMovement();
   
  //Drawing teams in the screen
  teamA.show();
  teamB.show();
  
  //Handling ball movements
  checkCollision();
  ball.show();
  ball.move();
  ball.collide();
}

function playerMovement(){
  //here I my thinking process is already gone 
  
  //if 'uparrow' is pressed
  if(keyIsDown(UP_ARROW)){
    teamA.move(-8);
  }
  //if 'downarrow'
  if(keyIsDown(DOWN_ARROW)){
    teamA.move(8);
  }
  //if 'w' is pressed 
  if(keyIsDown(87)){
    teamB.move(-8);  
  }
  //if 's' is pressed
  if(keyIsDown(83)){
    teamB.move(8);
  }
}

function checkCollision() {
  // now its 4AM I don't even know what I'm doing here anymore, but hey, it works!
  for(let player of players){
   if(collideRectCircle(player.attacker.x, player.attacker.y, player.attacker.w, player.attacker.h, ball.x, ball.y, ball.radius) ||
      collideRectCircle(player.defender.x, player.defender.y, player.defender.w, player.defender.h, ball.x, ball.y, ball.radius)){
      ball.speedx *= -1;
   }
  }
}

