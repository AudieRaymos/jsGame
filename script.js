let computerGuess

function init() {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
}