let userName = "";
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

let userQuestion = "Will I ever have a dog?";
if (userName === "") {
  console.log("So, you want to know: " + userQuestion);
} else {
  console.log(userName + " wants to know: " + userQuestion);
}

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "Sorry, can/t answer that, it/s confidential.";
    break;
  case 1:
    eightBall = "It is certain.";
    break;
  case 2:
    eightBall = "It is decidedly so.";
    break;
  case 3:
    eightBall = "Reply hazy try again.";
    break;
  case 4:
    eightBall = "Cannot predict now.";
    break;
  case 5:
    eightBall = "Do not count on it.";
    break;
  case 6:
    eightBall = "My sources say no.";
    break;
  case 7:
    eightBall = "Outlook not so good.";
    break;
  case 8:
    eightBall = "Signs point to yes.";
    break;
}

console.log("The Magic 8 Ball says: " + eightBall);
