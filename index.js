// assingment 26-30
////////////ques:1
function displayNumberValues() {

    let input = prompt("Enter a number:");


    let number = parseFloat(input);


    if (isNaN(number)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }


    let roundValue = Math.round(number);
    let floorValue = Math.floor(number);
    let ceilValue = Math.ceil(number);


    console.log("a. Number:", number.toFixed(4)); // Display original number with 4 decimal places
    console.log("b. Round off value:", roundValue);
    console.log("c. Floor value:", floorValue);
    console.log("d. Ceil value:", ceilValue);
}

displayNumberValues();

//ques 2 
 function displayNumberValues() {

    let input = prompt("Enter a negative floating-point number:");


    let number = parseFloat(input);


    if (isNaN(number) || number >= 0) {
        console.log("Invalid input. Please enter a negative floating-point number.");
        return;
    }


    let roundValue = Math.round(number);
    let floorValue = Math.floor(number);
    let ceilValue = Math.ceil(number);


    console.log("a. Number:", number);
    console.log("b. Round off value:", roundValue);
    console.log("c. Floor value:", floorValue);
    console.log("d. Ceil value:", ceilValue);
}


displayNumberValues();

////ques :3
function displayAbsoluteValue(number) {
    let absoluteValue = Math.abs(number);
    alert(`The absolute value of ${number} is ${absoluteValue}`);
  }
  displayAbsoluteValue(-4);  
  displayAbsoluteValue(5);   
  

  ////ques :4
  function rollDice() {
    
    let diceValue = Math.floor(Math.random() * 6) + 1;

    
    document.getElementById("diceResult").innerText = "Random dice value is " + diceValue;
  }


////ques :5
function tossCoin() {
    let coinValue = Math.random() < 0.5 ? "heads" : "tails";
    document.getElementById("coinResult").innerText = "Random coin value is " + coinValue;
  }

////ques :6
function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomNumberResult").innerText = "Random number between 1 to 100: " + randomNumber;
  }

////ques :7
 function parseWeight() {
      let userInput = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");

    
      let weight = parseFloat(userInput);

    
      if (!isNaN(weight)) {
        document.getElementById("weightResult").innerText = "Your weight is: " + weight + " kg";
      } else {
        document.getElementById("weightResult").innerText = "Invalid weight input. Please try again.";
      }
    }

////ques :8
function guessSecretNumber() {
    let secretNumber = Math.floor(Math.random() * 10) + 1;
    let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
    if (userGuess === secretNumber) {
      alert("Congratulations! You guessed the secret number.");
    } else {
      alert("Sorry, the secret number was " + secretNumber + ". Try again!");
    }
  }