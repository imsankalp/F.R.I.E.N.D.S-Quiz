let readlineSync = require('readline-sync');
const chalk = require('chalk');
let score = 0;

console.log(chalk.red.bgGreen('Hi, welcome to the game, Whats your name? \n'));
let name = readlineSync.question();
console.log(chalk.blue.bgRed.bold(`\nHi ${name}, welcome to the game, lets start the quiz \n`));



function play(question,answer){
  let userAnswer = readlineSync.question(chalk.blue.bgYellowBright(question));
  if(userAnswer.toLowerCase() === answer){
    console.log("RIGHT!");
    score = score + 1;
  }else {
    console.log(chalk.yellow("WRONG!"))
  }
  console.log(chalk.green("Your current score is: ",score));
  }


let questions=[{
  question:`Which of the following characters has high school nickname bigfatgoalie? [answer in a or b] \n
a)Monica \t b)Rachael\n
`,
  answer:"a",
},{
  question:`Which of the following characters was part of 'I hate Rachel Green Club"? [answer in a or b] \n
a)Chandler \t b)Ross
`,
  answer:"b",
},{
  question:`Which of the following characters had a "thing" for divorce? [answer in a or b] \n
a)Chandler \t b)Ross
`,
  answer:"b",
}]

for (let i =0;i<questions.length;i++){
  let currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log(chalk.red("YAY! Your final score is: ",score,"/ 3"));