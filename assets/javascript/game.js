// variables 
var randomNum = 0;
var scoreCount = 0;
var gemStone1 = 0;
var gemStone2 = 0;
var gemStone3 = 0;
var gemStone4 = 0;
var wins = 0;
var losses = 0;

var randomNumText = document.getElementById("randomNum")
var scoreCountText = document.getElementById("scoreCount")
var winsText = document.getElementById("wins")
var lossesText = document.getElementById("losses")

// screen refresh
var updateScreen = function () {
    randomNumText.textContent = "Random Number: " + randomNum;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    scoreCountText.textContent = "Score: " + scoreCount;
}

// game start 
var startUp = function () {
    randomNum = Math.floor(Math.random() * 101) + 19;
    gemStone1 = Math.floor(Math.random() * 12) + 1;
    gemStone2 = Math.floor(Math.random() * 12) + 1;
    gemStone3 = Math.floor(Math.random() * 12) + 1;
    gemStone4 = Math.floor(Math.random() * 12) + 1;
    scoreCount = 0

    updateScreen()
}

// score calculation 
var recalcScore = function(gemStoneValue) {
    scoreCount = scoreCount += gemStoneValue
    if (scoreCount === randomNum) {
        alert("You win!");
        wins++;
        return startUp();
    }
    else if (scoreCount > randomNum) {
        alert("You lose! You exceeded the goal by " + (scoreCount - randomNum + "."));
        losses++;
        return startUp();
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



$(document).ready(function () {
    startUp()
})