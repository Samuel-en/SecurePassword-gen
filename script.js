

// click the button 
  //- 1. generate a password
    // -prompts for password criteria
        // Xa.-length of the password
          //X- 8 - 128 characters
        //b.what types of characters
          // upper
          //lower
          //numeric
          //special char
        //c.-validate inputs
          // at least one character type
  // 2. password is generated 
      //a. alert or write password to page




var generateBtn = document.querySelector("#generate");

var passwordLength;
var numeric = []
var lowerCase = []
var upperCase = []
var specialCharacters = []





  function getPassLength(){
    var promptLength = prompt("How many characters would you like your password to contain");

    if (promptLength < 8 || promptLength > 128){
        alert('Please enter a value between 8 and 128')
        getPassLength()
    }

    passwordLength = promptLength
    return
  }

function generatePassword() {


  getPassLength()
  var useSpecialCharacters = confirm("click ok to confirm including special characters.");
  var useNumeric = confirm("click ok to include numeric characters.");
  var useLowerCase = confirm("click ok to confirm including lowercase Characters.");
  var useUpperCase = confirm("click ok to confirm uppercase characters.");

   
  return Math.floor(Math.random() * Math.floor(128));
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
