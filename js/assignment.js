"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];


// immutable variables
let shiftValue = "";
let popValue = "";

// Declaring constant variables to store references to the elements

const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

// STEP 1 -- Checking in the console
console.log(todos);
//Output: (5) ['Wash the dishes', 'Clean the gutters', 'Mow the yard', 
// 'Do some coding', 'Rake the leaves']

//Output to assignment
function updateAnswerOne() {
   answerOneEl.innerText = todos; 
//Mow the yard,Clean the gutters,Wash the dishes,
// Rake the leaves,Do some coding
}

//STEP 2 --  Checking in the console
console.log(todos[2]); //Output: Mow the yard

//Ouput to assignment page
function updateAnswerTwo() {
  answerTwoEl.innerText = todos[2];
  //Output:  Wash the dishes
}

//Step 3 
popValue = todos.pop();
//Checking in console
console.log(popValue); //Output:  Rake the leaves

function removeLastValue() {  
  //This code only works outside of the function
  //Do we really need this function??
}

//Step 4 -- checking in console
console.log(todos); 
//Output:  (4) ['Wash the dishes', 
// 'Clean the gutters', 'Mow the yard', 'Do some coding']

//Ouput to assignment page
function updateAnswerFour() {
  answerFourEl.innerText = todos; 
  //Output:  Mow the yard,Clean the gutters,
  // Wash the dishes,Rake the leaves,Do some coding
 } 

 //Step 5 
const reversed = todos.reverse();

//Checking in console
  console.log(todos); 
  //Output:  ['Do some coding', 'Mow the yard', 
  // 'Clean the gutters', 'Wash the dishes'

function reverseTodoList() {
  //This code only works outside of the function
  //Do we really need this function??
  
}
//Step 6 -  Output to assignment
function updateAnswerFive() {
  answerFiveEl.innerText = todos;
  //Ouptput:  Mow the yard,Clean the gutters,
  // Wash the dishes,Rake the leaves,Do some coding.
}
//Step 7 -- CHecking in console
shiftValue = todos.shift();
console.log(shiftValue); //Output: Do some coding

function removeFirstValue() {
  //This code only works outside of the function
  //Do we really need this function??
}

//Step 8 -- checking in console
todos.push(popValue, shiftValue);
console.log(todos);  //Output:  Mow the yard', 'Clean the gutters', 
// 'Wash the dishes', 'Rake the leaves', 'Do some coding']

function addShiftAndPopValues() {
  //This code only works outside of the function
  //Do we really need this function??
}

//Step 9
function updateAnswerSix() {
    answerSixEl.innerText = todos;
// Ouput:  Mow the yard,Clean the gutters,
// Wash the dishes,Rake the leaves,Do some coding
}


function render() {
  updateAnswerOne();
  updateAnswerTwo();
  updateAnswerFour();
  updateAnswerFive();
  updateAnswerSix();
}
submissionBtn.addEventListener("click", function () {
  render();
});
//This code worked the first time through
// but the submit button updates the answers at the end, so they are all wrong.
//answers written to the console are correct, but do not match
//the assignment page because we change the array before we push the answers

