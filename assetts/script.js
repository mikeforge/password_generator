// Assignment Code
var generateBtn = document.querySelector("#generate");

//setting up values for different character codes from ascii positions
const uppercase_codes = asciiArray(65,90);
const lowercase_codes = asciiArray(97,122);
const numeric_codes = asciiArray(48,57);
const special_codes = asciiArray(33,47)
  .concat(asciiArray(58,64))
  .concat(asciiArray(91,96))
  .concat(asciiArray(123,126));

//generate the arrays of character codes
function asciiArray(low,high) {
  const array =[];
  for (let i = low; i <=high; i++) {
    array.push(i);
  }
  //console.log(array)
  return array;
  
}


//generate the password with info from prompts

function generatePassword() {
  var pwdLength = Number(prompt("How long should your password be? Choose between 8 and 128", "14"));
  var lowercase = confirm("Would you like to use lowercase Letters?");
  var uppercase = confirm("Would you like to use Capital Letters?");
  var numeric = confirm("Would you like to use Numeric Values?");
  var special = confirm("Would you like to use Special Characters?");
  
  // Checking to ensure the number entered is within allowable range.
  var passlength = [];
  for (var i = 8; i <=128; i++) {
    passlength.push(i);
  }
  // Checking to ensure at least one type is selected
  if ((!lowercase) && (!uppercase) && (!numeric) && (!special)) {
    return alert("At least one type must be selected");
    }else {

  if (passlength.indexOf(pwdLength) >= 0) {
    console.log("Length was selected appropriately");
    let charCodes = [];
    if (lowercase) charCodes = charCodes.concat(lowercase_codes);
    if (uppercase) charCodes = charCodes.concat(uppercase_codes);
    if (numeric) charCodes = charCodes.concat(numeric_codes);
    if (special) charCodes = charCodes.concat(special_codes);
      
        const passChars = [];
        for (let i = 0; i < pwdLength; i++) {
          const characterCode =
            charCodes[Math.floor(Math.random() * charCodes.length)];
          passChars.push(String.fromCharCode(characterCode));
        }

       return passChars.join("");
  } 
  else {
      alert("please choose a number between 8 and 128");
      console.log("Please choose a number between 8 and 128");
    }
  }
}

// console.log(generatePassword());

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);