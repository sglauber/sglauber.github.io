class Ball {
  constructor(x, y, radius, speed = 7){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.radius = radius;
    this.resetBall();
  }
  
  resetBall(){
    this.x = width/2;
    this.y = height/2;
    let angle = Math.round(360 * random());
    this.speedx = cos(angle) * this.speed;
    this.speedy = sin(angle) * this.speed;
    console.log(cos(angle), this.speedx, this.speedy);
  }
  
  collide(){
    if(collideRectCircle(15, height/2 - 35,2,70, this.x, this.y,this.radius)){
      ball.resetBall();
      teamA.score++;
    } 
    if(collideRectCircle(width - 15, height/2 - 35,2,70, this.x, this.y,this.radius)){
      ball.resetBall();
      teamB.score++;
    }
  }
  
  move(){
    this.x += this.speedx;
    this.y += this.speedy;
    if((this.x + this.radius) > width || (this.x - this.radius) < 0){
      this.speedx *= -1;
    }
    if((this.y - this.radius) < 0 || (this.y + this.radius) > height){
      this.speedy *= -1;
    }    
  }
  
  show() {
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.radius, this.radius);
    }
}