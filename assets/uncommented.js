var generateBtn = document.querySelector("#generate");

let lowercaseArray = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let uppercaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let specialArray = ['!','@','#','$', '%','^','&','*','(',')','_','+','-','=','>','<','~'];
let numbers = [0,1,2,3,4,5,6,7,8,9];

function writePassword() {
  defineChoices();

  try { var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;
  } catch {  
    window.alert("Password length must be a numeric value. The minimum is 8 characters, the maximum is 128 characters. Please try again.");
  }
}

generateBtn.addEventListener("click", writePassword);

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

function generatePassword () {
  let storageArray = [];
  let generatedPassword = [];
  let length = parseInt(userInput);

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

    for (i = 0; i < length; i++) {
        let randStorIndex = Math.floor((Math.random() * storageArray.length));
        let randStorResult = storageArray[randStorIndex];

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

    let finalPassword = generatedPassword.join('');
 
    return finalPassword;
}


