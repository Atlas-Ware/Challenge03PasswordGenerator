// Assignment Code
var generateBtn = document.querySelector("#generate");
// Variables needed to be Defined

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password Prompt Functions
// Upper Characters Function
function upperCase(length) {
  generateBtn
  let person = prompt("Will the password contain uppercase characters?");
  var result = '';
  var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return characters;
    }  
    console.log(upperCase);

// Lowercase Characters Function
function lowerCase(length) {
  let person = prompt("Will the password contain lowercase characters?");
  var result = '';
  var characters ='abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return characters;
    } console.log(lowerCase);

// Numeric Characters Function
function numberChars(length) {
  let person = prompt("Will the password contain numeric characters?");
  var result = '';
  var characters ='0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return characters;
    } console.log(numberChars);

// Special Characters Function
function specialChars(length) {
  let person = prompt("Will the password contain special characters?");
  var result = '';
  var characters ='!@#$%&*?+=';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  return characters;
} console.log(specialChars);

// How many characters (8-128) Function
function howManyChars() {
  var numberChars = parseInt(prompt("How many characters would you like your password to have? Choose between 8 and 128"));
  if (!numberChars) {
    alert("This needs a value"); 
} else if (numberChars > 8 || numberChars < 128) 
  return numberChars;
}console.log(howManyChars)

//Master Function
function generatePassword() {
  let uCharacters = upperCase(length);
  let lCharacters = lowerCase(length);
  let nCharacters = numberChars(length);
  let sCharacters = specialChars(length);
  let characterSet = howManyChars(length);
    if (uCharacters == null) {
      alert("This needs a value");
    } else (characterSet += uCharacters)
    if (lCharacters == null) {
      alert("This needs a value");
    } else (characterSet += lCharacters)
    if (nCharacters == null) {
      alert("This needs a value");
    } else (characterSet += nCharacters)
    if (sCharacters == null) {
      alert("This needs a value");
    } else (characterSet += sCharacters)
   console.log(characterSet)
  var charactersLength = characterSet.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  return characterSet;
} console.log(generatePassword);





