// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

function generatePassword() { 
  prompt ("How many characters would you like your password to contain");
  confirm ("click ok to confirm including special characters.");
  confirm ("click ok to include numeric characters.");
  confirm ("click ok to confirm including lowercase Characters.");
  confirm ("click ok to confirm uppercase characters.");

   
  return Math.floor(Math.random() * Math.floor(128));
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
