var rolldice = function() {
  return Math.floor(Math.random() * 6) + 1;
}

function player(throwdice, actingscore, totalscore) {
  this.diceroll = throwdice
  this.actingscore = actingscore;
  this.totalscore = totalscore;
}
var firstplayer = new player(0, 0, 0);
var secondplayer = new player(0, 0, 0);
player.prototype.firstroll = function() {
  if (this.diceroll === 1) {
    this.actingscore = 0;
    alert(" Player Scored a 1, next player !")
  } else {
    this.actingscore += this.diceroll;
  }
}
player.prototype.hold = function() {
  this.totalscore += this.actingscore;
  this.actingscore = 0;
  alert(" Player has Held the game, next player turn ! ");
}
