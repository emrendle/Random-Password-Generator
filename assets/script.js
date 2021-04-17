// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays that store all possible lowercase, uppercase, special character, and number options.
let lowercaseArray = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let uppercaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let specialArray = ['!','@','#','$', '%','^','&','*','(',')','_','+','-','=','>','<','~'];
let numbers = [0,1,2,3,4,5,6,7,8,9];

// Write password to the #password input
function writePassword() {
    // First runs the function that defines all user choices - this avoids having to create many global variables.
  defineChoices();
  // Added a try/catch statement to produce error message if user input is outside of given character range or is not a numeric value.
  try { var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;
  } catch {  
    window.alert("Password length must be a numeric value. The minimum is 8 characters, the maximum is 128 characters. Please try again.");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function that defines all user choices, producing pop-up confirmation windows for each choice. 
function defineChoices() {
     userInput = window.prompt("How many characters?");
      // Ensuring length of userInput is a number and not a string.
     length = parseInt(userInput);
      // Below code only runs if the user input is greater than or equal to 8, less than or equal to 128.
    if (length >= 8 && length <= 128) {
      uppercaseChoice = window.confirm("Do you want to include uppercase characters? If no, press cancel.");
  
     lowercaseChoice = window.confirm("Do you want to include lowercase characters? If no, press cancel.");
  
     numberChoice = window.confirm("Do you want to include numbers? If no, press cancel.");
  
     specialChoice = window.confirm("Do you want to include special characters? If no, press cancel.");
    } 
  }
  
// Functions that generate a random item from the arrays defined above - generates a random number between 0 and the array length, which serves as the index value for the array. This produces a random item from the array. 
function getRandomLower() {
    let lowerIndex = Math.floor(Math.random() * lowercaseArray.length);
    return lowercaseArray[lowerIndex];
}

function getRandomUpper() {
    let upperIndex = Math.floor(Math.random() * uppercaseArray.length);
    return uppercaseArray[upperIndex];
}

function getRandomSpecial() {
    let specialIndex = Math.floor(Math.random() * specialArray.length);
    return specialArray[specialIndex];
}

function getRandomNumber() {
    let numberIndex = Math.floor(Math.random() * numbers.length);
    return numbers[numberIndex];
}

// Creating generatePassword() function that feeds into writePassword() above.
function generatePassword () {
  // Empty array to store values assigned to user choices for characters (see below).
  let storageArray = [];
  // Empty array to store characters generated from the for loop below.
  let generatedPassword = [];
  // Ensuring length of userInput is a number and not a string - defined this previously but this doesn't work when defined globally or when defined in previous function - not sure what's wrong. 
  let length = parseInt(userInput);

// When a user selects 'OK' (true) on the prompt, these if statements push a value (U/L/N/S to represent the choices) into the storageArray. If user does not select 'OK' on any prompts, a message appears saying at least one choice must be made. 
    if (uppercaseChoice === true) {
    storageArray.push("U");
    }
    if (lowercaseChoice === true) {
    storageArray.push("L");
    }
    if (numberChoice === true) {
    storageArray.push("N");
    }
    if (specialChoice === true) {
    storageArray.push("S");
    }
    if (uppercaseChoice === false && lowercaseChoice === false && numberChoice === false && specialChoice === false) {
        window.alert("You must select at least one character type to continue. Please try again.")
    }

// For loop that will run the number of times designated by the user input for password length (defined above). 
    for (i = 0; i < length; i++) {
  // Uses a randomly generated number 0 to length of the storageArray generated in above if statements to index the storageArray randomly.
        let randStorIndex = Math.floor((Math.random() * storageArray.length));
        let randStorResult = storageArray[randStorIndex];
        
        // The variable randStorResult is the result of randomly indexing the storage array - for each value that is returned, the corresponding random character generating function is assigned to it in the if statements below. Each statement pushes the resulting character into the generatedPasswordArray.
        if (randStorResult === "U") {
            let upperChar = getRandomUpper();
            generatedPassword.push(upperChar);
        } else if (randStorResult === "L") {
            let lowerChar = getRandomLower();
            generatedPassword.push(lowerChar);
        } else if (randStorResult === "N") {
            let numChar = getRandomNumber();
            generatedPassword.push(numChar);
        } else if (randStorResult === "S") {
            let specChar = getRandomSpecial();
            generatedPassword.push(specChar);
        }
        }

// Joins the randomly generated characters stored in the generatedPassword array into a string with no commas.
    let finalPassword = generatedPassword.join('');

    // Returns this value back to the function to be printed to the website. 
    return finalPassword;
}


