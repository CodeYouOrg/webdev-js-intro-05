"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];


// immutable variables
let shiftValue = " ";
let popValue = " ";

// Declaring constant variables to store references to the elements

const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");  //don't need this one
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

                              //Step 1 works fine
function updateAnswerOne() {
   answerOneEl.innerText = todos;                               
}
                                //Step 2 works fine
function updateAnswerTwo() {
  answerTwoEl.innerText = todos[2];                              
}
//Step 3 
function removeLastValue() {  
  popValue = todos.pop();       
}
                               //Step 4
function updateAnswerFour() {
  answerFourEl.innerText = todos; 
} 
                               //Step 5 
function reverseTodoList() {
  todos.reverse(); 
}            
                              //Step 6
function updateAnswerFive() {
  answerFiveEl.innerText = todos;
 }
                              //Step 7  
function removeFirstValue() {
shiftValue = todos.shift();        
}
  //Step 8  
 function addShiftAndPopValues() {
   todos.push(popValue);
   todos.push(shiftValue); 
      
}
                              //Step 9
function updateAnswerSix() {
    answerSixEl.innerText = todos;
}


function render() {
  updateAnswerOne();
  updateAnswerTwo();    //there is no use for AnswerThree
  removeLastValue();
  updateAnswerFour();
  reverseTodoList();
  updateAnswerFive();
  removeFirstValue();
  addShiftAndPopValues();
  updateAnswerSix();
}
submissionBtn.addEventListener("click", function () {
  render();
});


