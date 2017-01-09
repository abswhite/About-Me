'use strict';

var answerConfirm = confirm('Hey, you good?');

if(answerConfirm) {
  console.log('User is ready.');
} else {
  console.log('Welcome to the Real World.');
}

// use yesterday to help
var correctAnswer = 0;

var name = prompt('What is your name?');

if (name) {
  console.log('The user\'s name is ' + name);
} else {
  console.log('The user\'s name is undefined.');
}

//Question One
/*var correctAnswer = 'N';
var correctResponse = ['You got question 1 right', 'You got question 2 right'];
var incorrectResponse = ['You got question 1 wrong', 'You got question 2 wrong'];

var userAnswer = prompt('Question 1. ' + name + ', this is a yes or no question, so please answer with a Y or N. Is Abigail\'s middle name is Margaret?').toUpperCase();

var correctAnswer = 'N';

function answers() {
  if(userAnswer = correctAnswer) {
    alert(correctResponse[0]);
  } else {
    alert(incorrectResponse[0]);
  }
  console.log('User answered ' + userAnswer);
}

alert(answers());
*/
var answerOne = prompt('Question 1. ' + name + ', this is a yes or no question, so please answer with a Y or N. Is Abigail\'s middle name is Margaret?').toUpperCase();

function answerOneFunc(answerOne){
  if(answerOne === 'N') {
    return true;
  } else {
    return false;
  }
}

if (answerOneFunc(answerOne)) {
  console.log('Correct. For Question One, the user answered ' + answerOne + '.');
  alert('Good guess! Her middle name is Lauren, like Lauren Conrad, from The Hills, which she loves.');
  correctAnswer ++;
} else {
  console.log('Incorrect. For Question One, the user answered ' + answerOne + '. The answer is N.');
  alert('Wrong but on the right track. Like her first name and her last name, Abigail\'s middle name is painfully anglosaxon. ' + 'Her middle name is Lauren.');
}

//Question Two
var answerTwo = prompt('Question 2. ' + name + ', here\'s another yes or no question. Did Abigail live in the UK last year?').toUpperCase();

function answerTwoFunc(answerTwo){
  if(answerTwo === 'Y') {
    return true;
  } else {
    return false;
  }
}

if(answerTwoFunc(answerTwo)){
  console.log('Correct. For Question Two, the user answered ' + answerTwo + '.');
  alert('True! The trauma of 20 years of Boston winters finally took its toll and she peaced out. She lived in London    studying at LSE for 10 months while completing her junior year.');
  correctAnswer ++;
} else {
  console.log('Incorrect. For Question Two, the user answered ' + answerTwo + '. The answer is Y.');
  alert('Okay. I mean, you\'re wrong. But okay.');
}

//Question Three
var answerThree = prompt('Question 3. You know the drill, ' + name + '. Y or N. Does Abigail enjoy biking?').toUpperCase();

function answerThreeFunc(answerThree){
  if(answerThree === 'N') {
    return true;
  } else {
    return false;
  }
}

if (answerThreeFunc(answerThree)){
  console.log('Correct. For Question Three, the user answered ' + answerThree + '.');
  alert('Nice. You\'re right. She likes lots of outdoorsy things, but this is not one of them.');
  correctAnswer ++;
} else {
  console.log('Incorrect. For Question Three, the user answered ' + answerThree + '. The answer is N.');
  alert('Lol! Wrong.');
}

//Question Four
var answerFour = prompt('4. ' + name + ', Y or N. Does Abigail have a dog named Hobbes?').toUpperCase();

function answerFourFunc(answerFour){
  if(answerFour === 'Y') {
    return true;
  } else {
    return false;
  }
}

if (answerFourFunc(answerFour)){
  console.log('Correct. For Question Four, the user answered ' + answerFour + '.');
  alert('True! Her dog is named either after Thomas Hobbes (boring, scary philospher) or Hobbes (cute comic book tiger). Who\'s to say which one.');
  correctAnswer ++;
} else {
  console.log('Incorrect. For Question Four, the user answered ' + answerOne + '. The answer is Y.');
  alert('You are wrong. She has a dog. #nevercats');
}
//Question Five
var answerFive = prompt('5. ' + name + '! Y or N, please. Does Abigail enjoy yoga?').toUpperCase();

function questionFiveFunc(answerFive){
  if(answerFive === 'Y') {
    return true;
  } else {
    return false;
  }
}

if (questionFiveFunc(answerFive)) {
  console.log('Correct. For Question Five, the user answered ' + answerFive + '.');
  alert('Yes! I mean, She\'s terrible, but she practices 5-6 times a week. Please kindly let her know if you know any good studios in the area.');
  correctAnswer ++;
} else {
  console.log('Incorrect. For Question Five, the user answered ' + answerFive + '. The answer is Y.');
  alert('Incorrect, she does enjoy yoga. If the question had been-- is she talented at yoga?-- you would have been  correct.');
}

//Question Six
var a = 0;
var b = 3;

function questionSixFunc(answerSix){
  var response = 22;
  var answerSixRes = answerSix;
  if(answerSixRes === response) {
    alert('Well done! She is ' + response + '.');
    a = 5;
    console.log('Correct. For Question Six, the user answered ' + answerSix + '.');
    correctAnswer ++;
  } else if(answerSixRes > response) {
    alert('That guess it too high. You have ' + b + ' answers left.');
    b--;
    console.log('Inorrect. For Question Six, the user answered ' + answerSix + '. The answer is 22.');
  } else if(answerSixRes < response) {
    alert('That guess is too low. You have ' + b + ' answers left');
    console.log('Incorrect. For Question Six, the user answered ' + answerSix + '. The answer is 22.');
    b--;
  } else {
    alert('That guess is not a number. You have ' + b + ' answers left.');
    console.log('Incorrect. For Question Six, the user answered ' + answerSix + '. The answer is 22.');
    b--;
  }
}

while(a < 4) {
  var answerSix = parseInt(prompt('How old is Abigail?'));
  questionSixFunc(answerSix);
  a++;
}

//Question Seven
var attempts = 0;
var b = 5;
var locations = ['london', 'nashville', 'boston', 'seattle', 'waltham', 'danvers', 'danvers', 'waltham'];
var locationsLength = locations.length;

function questionSevenFunc(answerSeven){
  if(answerSeven === 'london' || answerSeven === 'nashville' || answerSeven === 'boston' || answerSeven === 'seattle' || answerSeven === 'danvers' || answerSeven === 'waltham' || answerSeven === 'danvers' || answerSeven === 'waltham') {
    return true;
  } else {
    return false;

  }
}

while(attempts < 6) {
  var answerSeven = prompt('Where has Abigail lived?').toLowerCase();
  for(var i = 0; i < locationsLength; i++) {
    if (questionSevenFunc(answerSeven)){
      console.log('Correct. For Question Seven, the user answered ' + answerSeven + '.');
      alert('That\'s right!');
      attempts = 8;
      i = locationsLength + 1;
      correctAnswer++;
    } else {
      console.log('Incorrect. For Question Seven, the user answered ' + answerSeven + '.');
      alert('Not true, you have ' + b + ' answers left');
      b--;
      i = locationsLength + 1;
      console.log(attempts);

    }
    attempts ++;
  }
}

alert('The possible answers were: London, Nashville, Boston, Seattle, Danvers, or Waltham.');

//count answers
if(correctAnswer > 5) {
  console.log('Congrats! You earned ' + correctAnswer + ' correct answers out of 7.');
  alert('Congrats, ' + name + '! You earned ' + correctAnswer + ' out of 7 potential correct answers.');
} else {
  console.log('Ouch, ' + name + ' You only earned ' + correctAnswer + ' out of 7 potential correct answers.');
  alert('Ouch, You only earned  ' + correctAnswer + ' correct answers out of 7.');
}
