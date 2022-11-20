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
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;//start score at 20 then decrease by 1 with each wrong guess

let highScore = 0//define highscore at start

//displays number
//moved to when play wins so number is visible on win
//document.querySelector(".number").textContent = secretNumber

document.querySelector(".check").addEventListener("click", function() {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);//gives back a string, convert to number on above line

  //when there is no input
  if(!guess) {
    document.querySelector(".message").textContent = "No Number Entered!"

    //when player wins
  }else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct number!"

    //display secret number
    document.querySelector(".number").textContent = secretNumber

    //background changes to green when number is guessed correctly
    document.querySelector("body").style.backgroundColor = "#60b347"

    //number box width double size on correct guess
    document.querySelector(".number").style.width = "30rem"
    
    //change highscore 
    if(score > highScore) {
      highScore = score
      document.querySelector(".highscore").textContent = highScore
    }

    //when guess is to high
  }else if (guess > secretNumber) {
    if(score > 1) {
      document.querySelector(".message").textContent = "To High!"
      score-- //same as score = score -1
      document.querySelector(".score").textContent = score
    }else {
      document.querySelector(".message").textContent = "You Lost!"
      document.querySelector(".score").textContent = 0
    }
    
     //when guess is to low
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

//Challenge < ----------------
//implement a game reset button, so player can make a new guess

document.querySelector(".again").addEventListener("click", function() {
  //set score && secret number
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //change text back to default
  document.querySelector(".message").textContent = "Start Guessing . . ."
  document.querySelector(".score").textContent = score
  //change number guessed back to ?
  document.querySelector(".number").textContent = "?"
  //change user input field back to empty
  document.querySelector(".guess").value = ""

  //reset CSS
  document.querySelector("body").style.backgroundColor = "#222"
  document.querySelector(".number").style.width = "15rem"
 
})
