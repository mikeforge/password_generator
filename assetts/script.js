// Assignment Code
var generateBtn = document.querySelector("#generate");

//setting up values for different character codes
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
  return array;
}

//generate the password with info from prompts

function generatePassword() {
  var passopts = { 
    length: Number(prompt("How many characters should your password be? Choose between 8 and 128", "14")),
    lowercase: prompt("Would you like to use lowercase Letters?","yes"),
    uppercase: prompt("Would you like to use Capital Letters?","yes"),
    numeric: prompt("Would you like to use Numeric Values?","yes"),
    special: prompt("Would you like to use Special Characters?","yes")
  };
  //Checking to ensure the number entered is within allowable range.
  // var passlength = [];
  //   for (var i = 8; i <=128; i++) {
  //     passlength.push(i);
  //   }

  //   if (passlength.indexOf(passopts.length) >= 0) {
  //       console.log("Length was selected appropriately");
  //   } else {
  //       alert("please choose a number between 8 and 128");
  //       console.log("Please choose a number between 8 and 128");
  //    }
    // passopts.length,
    // passopts.lowercase,
    // passopts.uppercase,
    // passopts.numeric,
    // passopts.special
       
    let charCodes = lowercase_codes;
    if (passopts.lowercase) charCodes = charCodes.concat(lowercase_codes);
    if (passopts.uppercase) charCodes = charCodes.concat(uppercase_codes);
    if (passopts.numeric) charCodes = charCodes.concat(numeric_codes);
    if (passopts.special) charCodes = charCodes.concat(special_codes);
    const passChars = [];
    for (let i = 0; i < passopts.length; i++) {
      const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
      passChars.push(String.fromCharCode(characterCode));
    }
    return passChars.join("");
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);