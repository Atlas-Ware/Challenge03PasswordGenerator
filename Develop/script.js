var specials = ["!","#","$","%","&","*", "+"," < ","="," > "," ? ","@"];
//console.log(specials)
var numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(numbers)
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//console.log(lowerCase)
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//console.log(upperCase)

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


// My CODE created with Bryan's help
function generatePassword() {
  var amountChars = parseInt(prompt("How many characters will your password contain (must be in-between 8 and 128)?"));
    //console.log(typeof amountChars)
    //console.log(amountChars)
// Conditionals
    if (!amountChars) {
      alert("This needs a value");
      return generatePassword();
  } else if (amountChars < 8 || amountChars > 128) {
      return generatePassword();
  } else {
      // Continues once user input is validated
      numbersCriteria = confirm("Will this contain numbers?");
      specialCriteria = confirm("Will this contain special characters?");
      uppercaseCriteria = confirm("Will this contain Uppercase letters?");
      lowercaseCriteria = confirm("Will this contain Lowercase letters?");
  };
   // Else if for 4 negative options
   if (!numbersCriteria && !specialCriteria && !uppercaseCriteria && !lowercaseCriteria) {
    choices = alert("You must choose a criteria!");
    //this will start the process again
    return generatePassword();
  }
  var userChoices = []
  
  
   if (numbersCriteria) {
    userChoices = userChoices.concat(numbers);
    
   }
   if (specialCriteria) {
    userChoices = userChoices.concat(specials);
    
   }
   if (lowercaseCriteria) {
    userChoices = userChoices.concat(lowerCase);
  
   }
   if (uppercaseCriteria) {
    userChoices = userChoices.concat(upperCase);
    
   }
  

var password = "";
  // Start random selection variables:
  // Random selection for all variables: 
  for (var i = 0; i < amountChars; i++) {
      var pickChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
      // += also means concat, so password adds from pickchoices
      password += pickChoices;
  } 
  // this takes our constructed password and brings it back to the function on line 21
  return password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


