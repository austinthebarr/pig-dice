function Player(finalScore){
  this.playerPrevious = [];
  this.playerTempScore = 0;
  this.finalScore = finalScore;
}

playerOne = new Player();
playerTwo = new Player();



Player.prototype.takeScore = function(takeScore){
    playerOne.playerTempScore = this.finalScore + takeScore;
}

Player.prototype.resetArray = function(){
  this.playerPrevious = [];
}

$(function(){

  $("#roll1").click(function(){

  var arr = [1,2,3,4,5,6];
  var roll = arr[Math.floor(Math.random()*arr.length)];
  playerOne.playerPrevious.push(roll)

  playerOne.playerTempScore = 0;
  playerOne.playerPrevious.forEach(function(currentScore){
    playerOne.playerTempScore += currentScore;
  });

  $(".current1Roll").text(roll);
  // $(".previous1Roll").text(playerOne.playerPrevious);
  $(".current1Score").text(playerOne.playerTempScore);

  });

  $("#stop1").click(function(){
    // debugger;
    // playerOne.playerPrevious = ;
    var takeScore = playerOne.playerTempScore
    // playerOne.resetArray();
    playerOne.takeScore();

    // var finalScore = this.finalScore + playerOne.playerTempScore;
    $("#player1Score").text(takeScore);
    $(".current1Roll").text("");
    // $(".previous1Roll").text("");
    $(".current1Score").text("");


  });
});
