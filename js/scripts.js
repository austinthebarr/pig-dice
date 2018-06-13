function Player(finalScore){
  this.playerPrevious = [];
  this.playerTempScore = 0;
  this.finalScore = finalScore;
}

playerOne = new Player();
playerTwo = new Player();
// var player1Previous = [];
// var player1Score = 0;
// player1Previous.forEach(function(player1Previous){
//   player1Score += player1Previous;
// });




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
  $(".previous1Roll").text(playerOne.playerPrevious);
  $(".current1Score").text(playerOne.playerTempScore);

  });

  $("#stop1").click(function(){
    // debugger;
    var takeScore = playerOne.playerTempScore
    // var finalScore = this.finalScore + playerOne.playerTempScore;
    $("#player1Score").text(takeScore);
    $(".current1Roll").text("");
    $(".previous1Roll").text("");
    $(".current1Score").text("");


  });
});
