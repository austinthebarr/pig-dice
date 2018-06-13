

function Player(finalScore){
  this.playerPrevious = [];
  this.playerTempScore = 0;
  this.finalScore = [];
}

var tempScore = [];
var playerOne = new Player();
var playerTwo = new Player();

function switchUser(){
  if(roll === 1)
  alert("switchUser")

}

Player.prototype.takeScore = function(takeScore){
    this.finalScore.push(takeScore);
}

Player.prototype.resetArray = function(){
  this.playerPrevious = [];
}

$(function(){

  $("#roll1").click(function(){

  arr = [1,2,3,4,5,6];
  roll = arr[Math.floor(Math.random()*arr.length)];
  switchUser();
  if(roll === 1)
  {
    roll = 0;
  }
  playerOne.playerPrevious.push(roll)

  playerOne.playerTempScore = 0;
  playerOne.playerPrevious.forEach(function(currentScore){
    playerOne.playerTempScore += currentScore;
  });
  playerOne.takeScore(playerOne.playerTempScore);
  playerOne.resetArray();



  $(".current1Roll").text(roll);
  $(".previous1Roll").text(playerOne.playerPrevious);
  $(".current1Score").text(playerOne.playerTempScore);

  });

  $("#stop1").click(function(){
    // debugger;
    // playerOne.playerPrevious = ;
    var takeScore = 0;
    // playerOne.resetArray();
    //playerOne.takeScore();

    playerOne.finalScore.forEach(function(score){
      takeScore += score;
    });
    console.log(playerOne.finalScore);

    // var finalScore = this.finalScore + playerOne.playerTempScore;
    $("#player1Score").text(takeScore);
    $(".current1Roll").text("");
    $(".previous1Roll").text("");
    $(".current1Score").text("");


  });
});
