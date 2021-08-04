var readlineSync = require('readline-sync');
var chalk = require('chalk');

var userName = readlineSync.question('Hi, I’m Usha! And you?\n');

console.log(chalk.bold.rgb(255,100,0)('\nHey, ' +userName+ '! Welcome to RCB Quiz.\n'));

var yOrN = readlineSync.question('Are you ready to take quiz? yes or no...\n')

if(yOrN.toUpperCase() != 'YES'){
console.log(chalk.red.bold('\nExiting from Quiz..'));
} else {
console.log('-------------------------------------------');
console.log(chalk.cyan.bold('Note :Enter option code(a or b) as your answer.'));
console.log('-------------------------------------------');

var score = 0;
var highScore ={
    name : 'Usha',
    marks : 5
  }
var questionsArr = [{
question : '1.What is the full form of RCB?',
a :'a.Royal Challengers Bangalore',
b :'b.Royal Chasers Bangalore\n',
answer : 'a' 
},

{
question : '2.Who is RCB owner?',
a :'a.Vijay Mallya',
b :'b.United Spirits\n',
answer : 'b'
},

{
question : '3.Who is the captain of RCB?',
a :'a.AB de Villiers',
b :'b.Virat Kohli\n',
answer : 'b'
},

{
question : '4.How many times RCB qualified for playoff?',
a :'a.3',
b :'b.4\n',
answer : 'a'
},

{
question : '5.Why RCB wear green jersey once in every IPL season?',
a :'a.To spread awareness about keeping the planet clean and healthy',
b :'b.To honour covid heroes\n',
answer : 'a'
},
]

function quiz(data1,data2,data3,data4){
console.log(data1);
console.log(data2);

var userAnswer = readlineSync.question(data3);
if(userAnswer.toUpperCase() ==""){
  console.log(chalk.red('Please enter either a or b as your answer..'));
  process.exit();
}else{
if(userAnswer.toUpperCase() == data4.toUpperCase()){
score= score + 1;
console.log(chalk.green('\nYes..,you are right and your current score is: ' +score));
console.log('****************************************');
} else {
console.log(chalk.red('\nOhh..,you are wrong. Correct answer is "'+data4+ '" and your current score is: ' +score));
console.log('****************************************');
}
}
}

for (var i=0;i<questionsArr.length;i++){
  quiz(questionsArr[i].question,questionsArr[i].a,questionsArr[i].b,questionsArr[i].answer);
}

console.log(chalk.bgWhiteBright.red.bold('Your final score is: '+score+ '.'));

if(score>=highScore.marks){
console.log(chalk.blue.bold('\nOHHH..,'+userName+' you played really well. Send me a screenshot of your score,I will update your name in the Highest scorer list.'));
}

console.log(chalk.yellow.bold('\nThank you. Have a nice day :)\n'));
}
