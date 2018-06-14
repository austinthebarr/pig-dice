function Player(finalScore){
  this.playerPrevious = [];
  this.playerTempScore = 0;
  this.finalScore = 0;
};
//round starter
round = 1;
//gets temp score so you can add then clear out array
tempScore = [];
var playerOne = new Player();
var playerTwo = new Player();
//calculate temp score
function calculate(array){
  tempScore.forEach(function(score){
    playerOne.finalScore += score
  });
};
//calculate temp score for player2
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

function switchUser(){
  if(roll === 1){
    alert("Crap, you just rolled 1. Switch player.")
  }
};

Player.prototype.win = function(){
  if(this.finalScore >=100){
    location.reload();
    alert("YOU WIN!")
  }
};

function bonusRound(){
  if(round === 7 && roll === 1){
    tempScore = [];
  }
  else if (round === 7 ){
    roll *= 2;
  }
};

function bonusText(){
  if(round !== 7){
    $(".bonusRound").hide();
  } else {
    $(".bonusRound").show();

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
  $(".round").text(round);
  bonusText();
  //Click to roll Dice for Player 1
  $("#roll1").click(function(){
    arr = [1,2,3,4,5,6];
    roll = arr[Math.floor(Math.random()*arr.length)];
    //will run to clear out array if roll is 1
    switchUser();
    //to add bonus round if at 7th round
    bonusRound();
    playerOne.playerPrevious.push(roll)
    playerOne.playerTempScore = 0;
    playerOne.playerPrevious.forEach(function(currentScore){
      playerOne.playerTempScore += currentScore;
    });
    //creates temp score so user can see how much they have so far
    var current = roll;
    for (var i = 0; i<tempScore.length; i+=1){
      current += tempScore[i];
    };
    //taking total of player temp score to tempScore
    pushTemp(playerOne.playerTempScore);
    //resets initial array playerPrevious
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
    //clears out tempScore
    tempScore = [];
    //clears page and alerts you if you WIN!
    playerOne.win();
    playerTwo.win();

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
    bonusRound();
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
    calculate2(tempScore);
    tempScore = [];
    playerOne.win()
    playerTwo.win();
    round += 1
    $("#player2Score").text(playerTwo.finalScore);
    $(".current2Roll").text("");
    $(".previous2Roll").text("");
    $(".current2Score").text("");
    $("#player2").hide();
    $("#player1").show();
    $(".round").text(round);
    bonusText();
  });

});
