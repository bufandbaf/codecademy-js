const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    return "Error! Please type rock, paper or scissors.";
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "You lost! Paper covers rock.";
    } else {
      return "You won! Rock destroys scissors.";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "You lost! Scissors cut paper.";
    } else {
      return "You won! Paper covers rock.";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "You lost! Rock destroys scissors.";
    } else {
      return "You won! Scissors cut paper.";
    }
  }

  if (userChoice === "bomb") {
    return "Congratulations, you won!";
  }
};

const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log("Your choice is: " + userChoice);
  console.log("Computer´s choice is: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
