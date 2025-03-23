let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const option = ["rock","paper","scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw! Try Onemore Time";
  msg.style.backgroundColor ="#84a59d";
};

const showWinner = (userWin , userchoice ,compChoice) => {
  if(userWin) {
    userscore++ ;
    userscorepara.innerText = userscore;
    msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor ="#fca311";
  } else {
    compscore++ ;
    compscorepara.innerText = compscore;
    msg.innerText = `You Lose. ${compChoice} beats your ${userchoice}`;
    msg.style.backgroundColor ="#7678ed";
  }
};

const playGame = (userchoice) => {
  const compChoice = genCompChoice();
  
  if(userchoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if(userchoice === "rock") {
      userWin = compChoice === "paper" ? false : true ;
    } else if(userchoice === "paper"){
      userWin = compChoice === "scissors" ? false : true ;
    } else {
      userWin = compChoice === "rock" ? false : true ; 
    }
    showWinner(userWin , userchoice ,compChoice);
  }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userchoice = choice.getAttribute("id");
      playGame(userchoice)
    });
});
