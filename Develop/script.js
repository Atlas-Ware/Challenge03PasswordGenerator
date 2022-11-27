// My Global Variables
var specials = ["!","#","$","%","&","*", "+"," < ","="," > "," ? ","@"];
//console.log(specials)
var numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(numbers)
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//console.log(lowerCase)
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//console.log(upperCase)

// Test Variables
var specialCriteria = false;
var numbersCriteria = false;
var lowercaseCriteria = false;
var uppercaseCriteria = false;

//BEGIN GIVEN CODE
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Variables needed to be Defined

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//END GIVEN CODE


// My CODE
//Single Function Structure
function generatePassword() {
//Prompt#01 to begin process
  var amountChars = parseInt(prompt("How many characters will your password contain (must be in-between 8 and 128)?"));
// Conditionals
// If 1st prompt is cancelled it is returned to Prompt#01
    if (!amountChars) {
      alert("This needs a value");
      return generatePassword();
// If choice of characters is below 8 or over 128
// Its is returned to Prompt#01
  } else if (amountChars < 8 || amountChars > 128) {
      return generatePassword();
  } else {
// If Prompt#01 is inputeed correctly (8<=128) then these next prompts pop
// Prompt Numbers #02 (may confirm or cancel, result will yield based on choice)
      numbersCriteria = confirm("Will this contain numbers?");
// Prompt Special Characters #03 (may confirm or cancel, result will yield based on choice)
      specialCriteria = confirm("Will this contain special characters?");
// Prompt Uppercase #04 (may confirm or cancel, result will yield based on choice)
      uppercaseCriteria = confirm("Will this contain Uppercase letters?");
// Prompt Lowercase #05 (may confirm or cancel, result will yield based on choice)
      lowercaseCriteria = confirm("Will this contain Lowercase letters?");
  };
// if Prompts#02-#05 are all cancelled, the password generation is cancelled 
// & returned to Prompt#01
   if (!numbersCriteria && !specialCriteria && !uppercaseCriteria && !lowercaseCriteria) {
    choices = alert("You must choose a criteria!");
// This returns the function to Prompt#01
    return generatePassword();
  }
// This variable carries & stores the choices of Prompt#02-#05
  var userChoices = []
// Choices that are stored (or cancelled based on user's choice 
// from Prompt#02) are then stored through this conditional (using
// Global Variable numbers & Test Variable numbersCriteria) here.
   if (numbersCriteria) {
    userChoices = userChoices.concat(numbers);
  }
// Choices that are stored (or cancelled based on user's choice 
// from Prompt#03) are then stored through this conditional (using
// Global Variable specials & Test Variable specialCriteria) here.
   if (specialCriteria) {
    userChoices = userChoices.concat(specials);
   }
// Choices that are stored (or cancelled based on user's choice 
// from Prompt#04) are then stored through this conditional (using
// Global Variable lowerCase & Test Variable lowercaseCriteria) here.
   if (lowercaseCriteria) {
    userChoices = userChoices.concat(lowerCase);
   }
// Choices that are stored (or cancelled based on user's choice 
// from Prompt#05) are then stored through this conditional (using
// Global Variable upperCase & Test Variable uppercaseCriteria) here.
   if (uppercaseCriteria) {
    userChoices = userChoices.concat(upperCase);
   }
  
// This Function Variable (password) will hold all the results from
// Prompts#01-05
  var password = "";
// Start random selection conditional
// Random selection for all variables
    for (var i = 0; i < amountChars; i++) {
        var pickChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
// += also means concat, so password adds from pickchoices
        password += pickChoices;
    } 
// this Return takes our constructed password and brings 
// it back to the function on line 23
    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


