class Player {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
    
  // score goes to teams

  move(amount) {
    this.y += amount;
    /* Stablishes a limit on how far players can m  preventing squares from going out of bounds */
    this.y = constrain(this.y, 15, height - this.h - 15);
  }  

  show(colorP) {
    noStroke();
    fill(colorP);
    rect(this.x, this.y, this.w, this.h);
  }
}