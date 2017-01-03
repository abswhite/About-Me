'use strict';
// first line every time

var answerOne = confirm('Are you ready?');

if(answerOne) {
  console.log('Woo! User is ready!');
} else {
  console.log('Sorry, too bad....');
}

// use yesterday to help

var name = prompt('What is your name?');
console.log('The user\'s name is ' + name);

//Question One
var answerOne = prompt(name + ', this is a yes or no question, so please answer with a Y or N. Is Abigail\'s middle name is Margaret?').toLowerCase();
console.log('The user answered ' + answerOne);

if (answerOne === 'n') {
  alert('Good guess! Her middle name is Lauren, like Lauren Conrad, from The Hills, which I love');
} else {
  alert('Wrong but on the right track. Like her first name and last name, Abigail\'s middle name is painfully unidentifying and white. ' + 'Her name is Lauren.');
}

//Question Two
var answerTwo = prompt(name + ', here\'s another yes or no question. Did Abigail live in the UK last year?').toLowerCase();
console.log('The user answered ' + answerTwo);

if (answerTwo === 'y') {
  alert('True! The trauma of 20 years of Boston winters finally took its toll and I fled back to the motherland. I lived in London for 10 months while completing my junior year.');
} else {
  alert('Okay. I mean, you\'re wrong. But I still respect you.');
}

//Question Three
var answerThree = prompt(name + 'You know the drill ,' + name + '. Y or N. Does Abigail enjoy gardening?').toLowerCase();
console.log('The user answered ' + answerThree);

if (answerThree === 'n') {
  alert('Nice. You\'re right. I like lots of outdoorsy things, but sitting in the sun getting eaten alive by bugs is not one of them!');
} else {
  alert('Lol! Wrong.');
}

//Question Four
var answerFour = prompt(name + 'Y or N. Abigail has a dog named Hobbes.').toLowerCase();
console.log('The user answered ' + answerFour);

if (answerFour === 'y') {
  alert('True! My dog is named either after Thomas Hobbes (morbid philospher) or Hobbes (cute comic book tiger). Who\'s to say which one.');
} else {
  alert('How dare you.');
}

//Question Five
var answerFive = prompt('LAST ONE ' + name + '! Y or N, please. Does Abigail enjoy yoga?').toLowerCase();
console.log('The user answered ' + answerFive);

if (answerFive === 'y') {
  alert('Yes! I mean, I\'m terrible, but I practice 5-6 times a week. Pls let me know if you know any good studios int he area.');
} else {
  alert('Wrong. You lost.');
}
