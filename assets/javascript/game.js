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
var updateScreen = function() {
    randomNumText.textContent = "Random Number: " + randomNum;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    scoreCountText.textContent = "Score: " + scoreCount;
}

// game start 
var startUp = function() {
    randomNum = [Math.floor(Math.random() * 101) + 19];
    gemStone1 = [Math.floor(Math.random() * 12) + 1];
    gemStone2 = [Math.floor(Math.random() * 12) + 1];
    gemStone3 = [Math.floor(Math.random() * 12) + 1];
    gemStone4 = [Math.floor(Math.random() * 12) + 1];
    
    updateScreen()
}

// gemstone 1
$("#gemStone1").on("click", function () {
    console.log(gemStone1)
})

// gemstone 2
$("#gemStone2").on("click", function () {
    console.log(gemStone2)
})

// gemstone 3
$("#gemStone3").on("click", function () {
    console.log(gemStone3)
})

// gemstone 4
$("#gemStone4").on("click", function () {
    console.log(gemStone4)
})



startUp()