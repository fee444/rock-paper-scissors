const result = document.querySelector(".result")
const myPOintsTotal = document.getElementById("your-score")
const machinePOintsTotal = document.getElementById("machine-score")
let myPOints = 0
let machinePoints = 0


const GET_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playerChoice = (humanChoice) => {
    playTheGame(humanChoice, machineChoice())
}

const machineChoice = () => {
    const choices = [GET_OPTIONS.ROCK, GET_OPTIONS.PAPER, GET_OPTIONS.SCISSORS]
    const randomNumbers = Math.floor(Math.random() * 3)
    return choices[randomNumbers]
}

const playTheGame = ((human, machine) => {
    if (human === machine) {
        result.innerHTML = 'Rodada empatada!'
    } else if ((human === GET_OPTIONS.ROCK && machine === GET_OPTIONS.SCISSORS) ||
        (human === GET_OPTIONS.PAPER && machine === GET_OPTIONS.ROCK) ||
        (human === GET_OPTIONS.SCISSORS && machine === GET_OPTIONS.PAPER)){
            result.innerHTML = 'Você ganhou!'
            myPOints++
            myPOintsTotal.innerHTML = myPOints
        } else{
            result.innerHTML = 'A máquina ganhou!'
            machinePoints++
            machinePOintsTotal.innerHTML = machinePoints
        }
})