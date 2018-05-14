var rolldice = function() {
  return Math.floor(Math.random() * 6) + 1;
}

function player(throwdice, actingscore, totalscore) {
  this.diceroll = throwdice
  this.actingscore = actingscore;
  this.totalscore = totalscore;
}
