// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input - added try/catch to produce error message if user input is outside of given character range
function writePassword() {
  defineChoices();
  try { var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  } catch {  
    window.alert("The minimum password length is 8 characters, maximum is 128 characters. Please try again.");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Creating generatePassword() function that feeds into writePassword() above
function generatePassword () {
  // Empty array to store numerical values assigned to true character choices (see if statements below)
  let charOptions = [];
  // Empty array to store characters generated from the for loop below
  let generatedPassword = [];
// Making sure user input is a number not a string
let length = parseInt(userInput);

// Converting individual choices into numerical values stored in the array above, only recording true choices (did this to avoid many if/else statements for all possible choice combinations)
if (uppercaseChoice === true) {
  charOptions.push(1);
}
if (lowercaseChoice === true) {
  charOptions.push(2);
}
if (numberChoice === true) {
  charOptions.push(3);
}
if (specialChoice === true) {
  charOptions.push(4);
}

console.log('character choices ', charOptions);

// For loop that 
for (i = 0; i < length; i++) {
  // Using a randomly generated number 0 to length of the array generated in above if statements to index that same array
  let randomChoice = Math.floor((Math.random() * charOptions.length));
  let chosenCharacter = charOptions[randomChoice];
  console.log('random choice: ', randomChoice);
  console.log('chosen character ', chosenCharacter);
  if (chosenCharacter === 1) {
    choice1 = getRandomUpper();
    generatedPassword.push(choice1);
  } else if (chosenCharacter === 2) {
    choice2 = getRandomLower();
    generatedPassword.push(choice2);
  } else if (chosenCharacter === 3) {
    choice3 = getRandomNumber();
    generatedPassword.push(choice3);
  } else if (chosenCharacter === 4) {
    choice4 = getRandomSpecial();
    generatedPassword.push(choice4);
  }
}

console.log('generated pw ', generatedPassword);

let finalPassword = generatedPassword.join('');
console.log('final pw ', finalPassword);

return finalPassword;
}

// Function that defines all user choices
function defineChoices() {
  userInput = window.prompt("How many characters?");
  let length = parseInt(userInput);
  if (length >= 8 && length <= 128) {
  uppercaseChoice = window.confirm("Do you want to include uppercase characters? If no, press cancel.");

  lowercaseChoice = window.confirm("Do you want to include lowercase characters? If no, press cancel.");

  numberChoice = window.confirm("Do you want to include numbers? If no, press cancel.");

  specialChoice = window.confirm("Do you want to include special characters? If no, press cancel.");
  } 
}


// Arrays that store all the lowercase, uppercase, special character, and number options
let lowercaseArray = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let uppercaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let specialArray = ['!','@','#','$', '%','^','&','*','(',')','_','+','-','=','>','<','~'];
let numbers = [0,1,2,3,4,5,6,7,8,9];

// Functions that generate a random item from the arrays listed above
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
