'use strict';

//<---DOM Manipulataion intro---------------

/*console.log(document.querySelector(".message").textContent)

document.querySelector(".message").textContent = "Correct number"

console.log(document.querySelector(".message").textContent)

document.querySelector(".number").textContent = 13
document.querySelector(".score").textContent = 10

document.querySelector(".guess").value = 23
console.log(document.querySelector(".guess").value)*/

//-------------------------------------

//START BUILDING 'GUESS MY NUMBER' < -------------------------------------------------
//define number
//compare secretNumber to users guess
//if not correct display message
//else if correct display message
//else if guess is greater or less than secretNumber, display message
//set score
//implement score to go down by 1 on wrong guess + high score
//implement some logic when score reaches 0 - you lose , otherwise will go infinte minus



//.random gives a decimal
//.trunc gives us a whole number
//multiply by what number you want between e.g 20 = 1-19 , so +1 will include 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;//start score at 20 then decrease by 1 with each wrong guess

document.querySelector(".number").textContent = secretNumber

document.querySelector(".check").addEventListener("click", function() {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);//gives back a string, convert to number on above line
  //
  if(!guess) {
    document.querySelector(".message").textContent = "No Number Entered!"
  }else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct number!"
  }else if (guess > secretNumber) {
    if(score > 1) {
      document.querySelector(".message").textContent = "To High!"
      score-- //same as score = score -1
      document.querySelector(".score").textContent = score
    }else {
      document.querySelector(".message").textContent = "You Lost!"
      document.querySelector(".score").textContent = 0
    }
    
  }else if (guess < secretNumber) {
    if(score > 1) {
      document.querySelector(".message").textContent = "To Low!"
      score-- //same as score = score -1
      document.querySelector(".score").textContent = score
    }else {
      document.querySelector(".message").textContent = "You Lost!"
      document.querySelector(".score").textContent = 0
    }
  }
})