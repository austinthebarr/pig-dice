

function Player(finalScore){
  this.playerPrevious = [];
  this.playerTempScore = 0;
  this.finalScore = 0;
}

var tempScore = [];
var playerOne = new Player();
var playerTwo = new Player();

function calculate(array){
  tempScore.forEach(function(score){
    playerOne.finalScore += score
  });
}


function pushTemp(score){
  if(score !== 1)
    tempScore.push(score)
  else{
    tempScore = [];
  }
}

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
//Click to roll Dice
  $("#roll1").click(function(){
  // debugger;
  arr = [1,2,3,4,5,6];
  roll = arr[Math.floor(Math.random()*arr.length)];
  switchUser();


  playerOne.playerPrevious.push(roll)
  playerOne.playerTempScore = 0;
  playerOne.playerPrevious.forEach(function(currentScore){
    playerOne.playerTempScore += currentScore;
  });

  pushTemp(playerOne.playerTempScore);
  // playerOne.takeScore(playerOne.playerTempScore);
  playerOne.resetArray();

  $(".current1Roll").text(roll);
  $(".previous1Roll").text(tempScore);
  $(".current1Score").text(playerOne.playerTempScore);

  });

  $("#stop1").click(function(){
    //this calculates finalScore and clears out tempScore
    calculate(tempScore);
    tempScore = [];

    console.log(playerOne.finalScore);

    // var finalScore = this.finalScore + playerOne.playerTempScore;
    $("#player1Score").text(playerOne.finalScore);
    $(".current1Roll").text("");
    $(".previous1Roll").text("");
    $(".current1Score").text("");


  });
});
