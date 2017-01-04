'use strict';
// first line every time

var answerConfirm = confirm('Are you ready?');

if(answerConfirm) {
  console.log('Woo! User is ready!');
} else {
  console.log('Sorry, too bad....');
}

// use yesterday to help

var name = prompt('What is your name?');
console.log('The user\'s name is ' + name);

//Question One
var answerOne = prompt('1. ' + name + ', this is a yes or no question, so please answer with a Y or N. Is Abigail\'s middle name is Margaret?').toUpperCase();
if(answerOne === 'N') {
  console.log('Correct. For Question One, the user answered ' + answerOne + '.');
} else {
  console.log('Incorrect. For Question One, the user answered ' + answerOne + '. The answer is N.');
}

if (answerOne === 'N') {
  alert('Good guess! Her middle name is Lauren, like Lauren Conrad, from The Hills, which she loves.');
} else {
  alert('Wrong but on the right track. Like her first name and last name, Abigail\'s middle name is painfully unidentifying and white. ' + 'Her name is Lauren.');
}

//Question Two
var answerTwo = prompt('2. ' + name + ', here\'s another yes or no question. Did Abigail live in the UK last year?').toUpperCase();
if(answerTwo === 'Y') {
  console.log('Correct. For Question Two, the user answered ' + answerTwo + '.');
} else {
  console.log('Incorrect. For Question Two, the user answered ' + answerTwo + '. The answer is Y.');
}

if (answerTwo === 'Y') {
  alert('True! The trauma of 20 years of Boston winters finally took its toll and so she fled back to the motherland. She lived in London studying at LSE for 10 months while completing her junior year.');
} else {
  alert('Okay. I mean, you\'re wrong. But I still respect you.');
}

//Question Three
var answerThree = prompt('3. You know the drill, ' + name + '. Y or N. Does Abigail enjoy gardening?').toUpperCase();
if(answerOne === 'N') {
  console.log('Correct. For Question Three, the user answered ' + answerThree + '.');
} else {
  console.log('Incorrect. For Question Three, the user answered ' + answerThree + '. The answer is N.');
}

if (answerThree === 'N') {
  alert('Nice. You\'re right. She likes lots of outdoorsy things, but sitting in the sun getting eaten alive by bugs is not one of them!');
} else {
  alert('Lol! Wrong.');
}

//Question Four
var answerFour = prompt('4. ' + name + ', Y or N. Does Abigail have a dog, just as Adam does?').toUpperCase();
if(answerFour === 'Y') {
  console.log('Correct. For Question Four, the user answered ' + answerFour + '.');
} else {
  console.log('Incorrect. For Question Four, the user answered ' + answerOne + '. The answer is Y.');
}

if (answerFour === 'Y') {
  alert('True! Her dog is named either after Thomas Hobbes (boring, morbid philospher) or Hobbes (cute comic book tiger). Who\'s to say which one.');
} else {
  alert('How DARE you. Of COURSE she has a dog. Get off this website.');
}

//Question Five
var answerFive = prompt('5. Last one ' + name + '! Y or N, please. Does Abigail enjoy yoga?').toUpperCase();
if(answerFive === 'Y') {
  console.log('Correct. For Question Five, the user answered ' + answerFive + '.');
} else {
  console.log('Incorrect. For Question Five, the user answered ' + answerFive + '. The answer is Y.');
}

if (answerFive === 'Y') {
  alert('Yes! I mean, She\'s terrible, but she practices 5-6 times a week. Pls let her know if you know any good studios in the area.');
} else {
  alert('Wrong. You lost.');
}

document.writeln('What is your name?');
document.writeln(name);
document.writeln('Question 1:  Is Abigail\'s middle name is Margaret?');
document.writeln(answerOne);
document.writeln('Question 2:  Did Abigail live in the UK last year?');
document.writeln(answerTwo);
document.writeln('Question 3:  Does Abigail enjoy gardening?');
document.writeln(answerThree);
document.writeln('Question 4:  Does Abigail have a dog, just as Adam does?');
document.writeln(answerFour);
document.writeln('Question 5:  Does Abigail enjoy yoga?');
document.writeln(answerFive);
