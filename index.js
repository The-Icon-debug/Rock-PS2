const choices = ["Rock", "Paper", "Scissors"]
const container = document.getElementById("container")

const playerChoiceEl = document.querySelector("#player-choice")
const computerChoiceEl = document.getElementById("computer-choice")
const resultEl = document.querySelector("#result")
let playerChoice = ""
let computerChoice = ""

const playerScoreEl = document.getElementById("player-score-el")
const roundsEl = document.querySelector("#round-el")
const computerScoreEl = document.getElementById("computer-score-el")
let playerScore = 0
let rounds = 0
let computerScore = 0

const rockBtn = document.querySelector("#rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.querySelector("#scissors-btn")

rockBtn.addEventListener("click", () =>{
    playerChoice = "Rock"
    playerChoiceEl.textContent = playerChoice
    getComputerChoice()
    getResult()
    rounds++
    roundsEl.textContent = rounds
    getGameStatus()
})

paperBtn.addEventListener("click", () =>{
    playerChoice = "Paper"
    playerChoiceEl.textContent = playerChoice
    getComputerChoice()
    getResult()
    rounds++
    roundsEl.textContent = rounds
    getGameStatus()
})

scissorsBtn.addEventListener("click", () =>{
    playerChoice = "Scissors"
    playerChoiceEl.textContent = playerChoice
    getComputerChoice()
    getResult()
    rounds++
    roundsEl.textContent = rounds
    getGameStatus()
})

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*choices.length)
    computerChoice = choices[randomNumber]
    computerChoiceEl.textContent = computerChoice
}

function getResult() {
    if(playerChoice === "Rock"){
        if(computerChoice === "Rock"){
            resultEl.textContent = "It's a tie!"
            container.style.backgroundColor = "gray"
        } else if(computerChoice === "Paper"){
            resultEl.textContent = "You Lost!"
            computerScore++
            computerScoreEl.textContent = computerScore
            container.style.backgroundColor = "red"
        } else if(computerChoice === "Scissors"){
            resultEl.textContent = "You Won!"
            playerScore++
            playerScoreEl.textContent = playerScore
            container.style.backgroundColor = "green"
        }
    } else if(playerChoice === "Paper"){
        if(computerChoice === "Rock"){
            resultEl.textContent = "You Won!"
            playerScore++
            playerScoreEl.textContent = playerScore
            container.style.backgroundColor = "green"
        } else if(computerChoice === "Paper"){
            resultEl.textContent = "It's a tie!"
            container.style.backgroundColor = "gray"
        } else if(computerChoice === "Scissors"){
            resultEl.textContent = "You Lost!"
            computerScore++
            computerScoreEl.textContent = computerScore
            container.style.backgroundColor = "red"
        }
    } else if(playerChoice === "Scissors"){
        if(computerChoice === "Rock"){
            resultEl.textContent = "You Lost!"
            computerScore++
            computerScoreEl.textContent = computerScore
            container.style.backgroundColor = "red"  
        } else if(computerChoice === "Paper"){
            resultEl.textContent = "You Won!"
            playerScore++
            playerScoreEl.textContent = playerScore
            container.style.backgroundColor = "green" 
        } else if(computerChoice === "Scissors"){
            resultEl.textContent = "It's a tie!"
            container.style.backgroundColor = "gray" 
        }
    }
}

function getGameStatus() {
    if(rounds === 5){
        if(playerScore === computerScore){
            window.confirm("It's a Tie")
            resetGame()
        } else if(playerScore > computerScore){
            window.confirm("You Won the rounds!")
            resetGame()
        } else if(playerScore < computerScore){
            window,confirm("You Lost the rounds!")
            resetGame()
        }
    }
}

function resetGame() {
  container.style.backgroundColor = "#ecfdf5"
  playerChoiceEl.textContent = ""
  computerChoiceEl.textContent = ""
  resultEl.textContent = ""
  playerChoice = ""
  computerChoice = ""
  playerScoreEl.textContent = 0
  roundsEl.textContent = 0
  computerScoreEl.textContent = 0
  playerScore = 0
  rounds = 0
  computerScore = 0
}