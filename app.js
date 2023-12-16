
let userScore = 0;
let computerScore = 0;

const image = document.querySelectorAll(".image");
const msg = document.querySelector("#msg");
const playerScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

const computerChoice = () => {
  //rock, paper, scissor
  const opt = ["rock", "paper", "scissor"];
  const optIdx = Math.floor(Math.random() * 3);
  return opt[optIdx];
};

const drawGame = () => {
  msg.innerText = "Game is Drawn, Play Again!!";
  msg.style.backgroundColor = "orange";
  msg.style.color = "white";
  // console.log("game is draw");
};

const showWinner = (playerWin, playerChoice, compChoice) => {
  if (playerWin) {
    // console.log("You Win !");
    userScore++;
    playerScore.innerText = userScore;
    msg.innerText = `You Win! Your ${playerChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    computerScore++;
    compScore.innerText = computerScore;
    msg.innerText = `You Lose! ${compChoice} beats Your ${playerChoice}`;
    msg.style.backgroundColor = "Red";
    // console.log("You Lose !");
  }
};

const playGame = (playerChoice) => {
  // console.log("Player Choice =", playerChoice);
  //Generate Computer Choice
  const compChoice = computerChoice();
  // console.log("Computer Choice =", compChoice);

  if (playerChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let playerWin = true;
    if (playerChoice === "rock") {
      playerWin = compChoice === "paper" ? false : true;
    } else if (playerChoice === "paper") {
      playerWin = compChoice === "scissor" ? false : true;
    } else {
      playerWin = compChoice === "rock" ? false : true;
    }
    showWinner(playerWin, playerChoice, compChoice);
  }
};

image.forEach((image) => {
  // console.log(image);
  image.addEventListener("click", () => {
    const playerChoice = image.getAttribute("id");
    // console.log("image was clicked", playerChoice);
    playGame(playerChoice);
  });
});
