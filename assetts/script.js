// Assignment Code
var generateBtn = document.querySelector("#generate");
 
// prompting for pass requirement options
// 


// var passopts = { //Look at moving this local to scope of addEventListener at bottom...
//   length: Number(prompt("How many characters should your password be? Choose between 8 and 128", "14")),
//   lowercase: prompt("Would you like to use lowercase Letters?","yes"),
//   Uppercase: prompt("Would you like to use Capital Letters?","yes"),
//   Numeric: prompt("Would you like to use Numeric Values?","yes"),
//   Special: prompt("Would you like to use Special Characters?","yes")

// }

// Setting contstraint check for length prompt  //Moved this to within scope of function as well to only fire after btn click.
// var passlength = [];
//     for (var i = 8; i <=128; i++) {
//       passlength.push(i);
//     }

//     if (passlength.indexOf(passopts.length) >= 0) {
//         console.log("Length was selected appropriately");
//     } else {
//         console.log("Please choose a number between 8 and 128");
//     }


// Write password to the #password input
function writePassword() {
  var passopts = { //Look at moving this local to scope of generate function instead...
    length: Number(prompt("How many characters should your password be? Choose between 8 and 128", "14")),
    lowercase: prompt("Would you like to use lowercase Letters?","yes"),
    Uppercase: prompt("Would you like to use Capital Letters?","yes"),
    Numeric: prompt("Would you like to use Numeric Values?","yes"),
    Special: prompt("Would you like to use Special Characters?","yes")
  }

  //Checking to ensure the number entered is within allowable range.
  var passlength = [];
    for (var i = 8; i <=128; i++) {
      passlength.push(i);
    }

    if (passlength.indexOf(passopts.length) >= 0) {
        console.log("Length was selected appropriately");
    } else {
        console.log("Please choose a number between 8 and 128");
    }

  //calling the function to actually print the password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  if (passopts.lowercase = true) {

  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 