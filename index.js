var readlineSync = require('readline-sync');
const chalk = require('chalk');
var playScore = 0;
var bitScore = 5;

var userName = readlineSync.question('May i have your name? ');
console.log(chalk.cyan.bold("welcome to the quiz of Harry-Potter !"));

var questions = [
  {
  question:"What type of animal does professor McGonagall transform into?\n1.Owl\n2.Cat\n3.Dog\n",
  answer:"2"
  },
  {
  question:"Who owns the flying motorcycle that Hagrid borrows to transport Harry to the Dursley house?\n1.Sirius black\n2.Severus snape\n3.Hermione granger\n",
  answer:"1"
  },
  {
  question:"How old is Harry when he finds out that he is a wizard?\n1.12\n2.9\n3.11\n",
  answer:"3"
  },
  {
  question:"How many silver sickles are there to a Galleon?\n1.17\n2.5\n3.15\n",
  answer:"1"
  },
  {
  question:"What does Hagrid bring Harry when he first meets him?\n1.An owl\n2.A broomstick\n3.A birthday cake\n",
  answer:"3"
  }
]

var highScore = [
  {
    name:"punya",
    score:"4"
  },
  {
    name:"soumya",
    score:"3"
  }
]
function playGame(question,answer) {
  var userAnswer = readlineSync.question(question);
  
  if (userAnswer === answer){
    console.log(chalk.magentaBright.bold("You entered "+answer));
    console.log(chalk.green("You are right"));
    playScore = playScore+1;    
  } else {
    console.log(chalk.magentaBright.bold("You entered "+answer));
    console.log(chalk.green("you are wrong"));
  }
  console.log(chalk.yellow("Score is "+playScore));
}

for (var i=0;i<questions.length;i=i+1){
  var answerloop = questions[i];
  playGame(answerloop.question,answerloop.answer);
  }

var newUser = {
  name:userName,
  score:playScore
}
highScore.push(newUser);

console.log(chalk.blue.bold("\nHere is the final score :\n"));
for (var j=0;j<highScore.length;j=j+1){
  var userScore = highScore[j];  
  console.log(chalk.cyan.bold(userScore.name,userScore.score));
  }

  if (bitScore == userScore.score){
    console.log(chalk.blue.bold("\nYAH! You beaten the score"));
  } else {
    console.log(chalk.blue.bold("\nYou haven't beaten the score !"))
  }


