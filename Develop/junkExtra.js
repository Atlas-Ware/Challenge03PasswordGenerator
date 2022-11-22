function lowerCase(length) {
  let person = prompt("Will the password contain lowercase characters?");
  var result = '';
  var characters ='abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
  return result;
}
console.log(lowerCase);

function numberChars(length) {
  let person = prompt("Will the password contain numeric characters?");
  var result = '';
  var characters ='0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
  return result;
}
console.log(numberChars);

function specialChars(length) {
  let person = prompt("Will the password contain special characters?");
  var result = '';
  var characters ='!@#$%&*?+=';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  return result;
}
console.log(specialChars);

function myPassword(length) {
  var result           = '';
  var characters = [specialChars,numberChars,lowerCase,upperCase];
  console.log(characters);
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

console.log(myPassword());