class Team {
  constructor(team){
      this.attacker = team.attacker;
      this.defender = team.defender; 
      this.score = 0;
      this.colorA = team.color;
  }
  
  show(){
      this.attacker.show(this.colorA);
      this.defender.show(this.colorA);
  }
  
  move(amount){
    this.attacker.move(amount);
    this.defender.move(amount);
  }
}




