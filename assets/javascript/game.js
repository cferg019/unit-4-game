// variables 
var randomNum = 0;
var scoreCount = 0;
var gemStone1 = 0;
var gemStone2 = 0;
var gemStone3 = 0;
var gemStone4 = 0;
var wins = 0;
var losses = 0;
var gameStatus = "";

var randomNumText = document.getElementById("randomNum")
var scoreCountText = document.getElementById("scoreCount")
var winsText = document.getElementById("wins")
var lossesText = document.getElementById("losses")
var gameStatusText = document.getElementById("gameStatus")

// screen refresh
var updateScreen = function () {
    randomNumText.textContent = "Random Number: " + randomNum;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    scoreCountText.textContent = "Score: " + scoreCount;
    gameStatusText.textContent = gameStatus;
}

// game start 
var startUp = function () {
    randomNum = Math.floor(Math.random() * 101) + 19;
    gemStone1 = Math.floor(Math.random() * 12) + 1;
    gemStone2 = Math.floor(Math.random() * 12) + 1;
    gemStone3 = Math.floor(Math.random() * 12) + 1;
    gemStone4 = Math.floor(Math.random() * 12) + 1;
    scoreCount = 0
    gameStatus = "Click any crystal to begin!"
    updateScreen()
}

// score calculation 
var recalcScore = function(gemStoneValue) {
    scoreCount = scoreCount += gemStoneValue
    if (scoreCount === randomNum) {
        // alert("You win!");
        wins++;
        return endGame("win")
    }
    else if (scoreCount > randomNum) {
       // alert("You lose! You exceeded the goal by " + (scoreCount - randomNum + "."));
        losses++;
        return endGame("lose")
    }
    updateScreen()
}

// gemstone 1
$("#gemStone1").on("click", function () {
    recalcScore(gemStone1)
})

// gemstone 2
$("#gemStone2").on("click", function () {
    recalcScore(gemStone2)
})

// gemstone 3
$("#gemStone3").on("click", function () {
    recalcScore(gemStone3)
})

// gemstone 4
$("#gemStone4").on("click", function () {
    recalcScore(gemStone4)
})

//end game 
var endGame = function (outcome) {
    var i = 3;
    var interval;
    var updateOutcomeText = function () {
        gameStatus = "You " + outcome + "! New game starting in... " + i;
        updateScreen();
        if (i === 0) {
            clearInterval(interval);
            startUp();
        }
        i--;
    }
    // Execute it once so it happens right away
    updateOutcomeText();
    // Then let setInterval do the rest every 1000ms
    interval = setInterval(updateOutcomeText, 1000)
}


$(document).ready(function () {
    startUp()
})