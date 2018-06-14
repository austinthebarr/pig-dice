function Player(finalScore){
  this.playerPrevious = [];
  this.playerTempScore = 0;
  this.finalScore = 0;
};

tempScore = [];
var playerOne = new Player();
var playerTwo = new Player();

function calculate(array){
  tempScore.forEach(function(score){
    playerOne.finalScore += score
  });
};

function calculate2(array){
  tempScore.forEach(function(score){
    playerTwo.finalScore += score
  });
};

function pushTemp(score){
  if(score !== 1)
    tempScore.push(score)
  else{
    tempScore = [];
  };
};

// alert
function switchUser(){
  if(roll === 1)
  alert("Crap, you just rolled 1. Switch player.")

};

 Player.prototype.win = function(){
   if(this.finalScore >=100){
      location.reload();


   alert("YOU WIN!")
 }
 };

Player.prototype.takeScore = function(takeScore){
    this.finalScore.push(takeScore);
};

Player.prototype.resetArray = function(){
  this.playerPrevious = [];
};

// user interface
$(function(){
//Click to roll Dice for Player 1
  $("#roll1").click(function(){
     arr = [1,2,3,4,5,6];
     roll = arr[Math.floor(Math.random()*arr.length)];
    switchUser();

    playerOne.playerPrevious.push(roll)
    playerOne.playerTempScore = 0;
    playerOne.playerPrevious.forEach(function(currentScore){
    playerOne.playerTempScore += currentScore;
    });

    //debugger;
    var current = roll;
    for (var i = 0; i<tempScore.length; i+=1){
      current += tempScore[i];
    };

    pushTemp(playerOne.playerTempScore);
    // playerOne.takeScore(playerOne.playerTempScore);
    playerOne.resetArray();

    $(".current1Roll").text(roll);
    $(".previous1Roll").text(tempScore);
    $(".current1Score").text(current);
  });
// Click to Collect amount
  $("#stop1").click(function(){
    //this calculates finalScore and clears out tempScore
    // calculate(tempScore);
    calculate(tempScore);

    tempScore = [];
    playerOne.win();
    playerTwo.win();


   // var finalScore = this.finalScore + playerOne.playerTempScore;
    $("#player1Score").text(playerOne.finalScore);
    $(".current1Roll").text("");
    $(".previous1Roll").text("");
    $(".current1Score").text("");
    $("#player1").hide();
    $("#player2").show();
  });
//click to toll dice for playerTwo
  $("#roll2").click(function(){

     arr = [1,2,3,4,5,6];
     roll = arr[Math.floor(Math.random()*arr.length)];
    switchUser();

    playerTwo.playerPrevious.push(roll)
    playerTwo.playerTempScore = 0;
    playerTwo.playerPrevious.forEach(function(currentScore){
    playerTwo.playerTempScore += currentScore;
    });

    var current = roll;
    for (var i = 0; i<tempScore.length; i+=1){
      current += tempScore[i];
    };

    pushTemp(playerTwo.playerTempScore);
    playerTwo.resetArray();
    $(".current2Roll").text(roll);
    $(".previous2Roll").text(tempScore);
    $(".current2Score").text(current);

  });
  //click to collect final score
  $("#stop2").click(function(){

    // calculate(tempScore);
//
    calculate2(tempScore);
    tempScore = [];
    playerOne.win()
    playerTwo.win();

    $("#player2Score").text(playerTwo.finalScore);
    $(".current2Roll").text("");
    $(".previous2Roll").text("");
    $(".current2Score").text("");
    $("#player2").hide();
    $("#player1").show();
  });


});
