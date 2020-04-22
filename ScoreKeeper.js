var playerOneDis = document.querySelector("#p1dis");
var playerTwoDis = document.querySelector("#p2dis");
var playerOne = document.querySelector("#p1");
var playerTwo = document.querySelector("#p2");
var winner = document.querySelector(".winner");
var resetButton = document.querySelector("#reset");
var numImput = document.querySelector("input");
var winningScoreDis = document.querySelector("#playingto");
var playerOneScore = 0;
var playerTwoScore = 0;
var winningScore = 5;
var isGameOver = false;


playerOne.addEventListener("click", function() {
	if (isGameOver) {
		return
	}
	else {
		playerOneScore++;
		if (playerOneScore === winningScore) {
			playerOneDis.classList.add("winner");
			isGameOver = true;
		}
		playerOneDis.textContent = playerOneScore;
	}
})

playerTwo.addEventListener("click", function() {
	if (isGameOver) {
		return
	}
	else {
		playerTwoScore++;
		if (playerTwoScore === winningScore) {
			playerTwoDis.classList.add("winner");
			isGameOver = true;
		}
		playerTwoDis.textContent = playerTwoScore;
	}
})

resetButton.addEventListener("click", function() {
	reset();
})

function reset() {
	playerOneScore = 0;
	playerTwoScore = 0;
	playerOneDis.textContent = playerOneScore;
	playerTwoDis.textContent = playerTwoScore;
	playerOneDis.classList.remove("winner");
	playerTwoDis.classList.remove("winner");
	isGameOver = false;
}
numImput.addEventListener("change", function() {
	winningScore = Number(numImput.value);
	winningScoreDis.textContent = winningScore;
	reset();
})








