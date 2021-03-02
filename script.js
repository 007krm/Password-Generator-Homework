const generateBtn = document.querySelector("#generate");
const questions = document.querySelector(".card-questions");
const createPasswordBtn = document.querySelector("#createPassword");

const UPPERCASE_CHARCODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHARCODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHARCODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHARCODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));
// Generate password
function generatePassword(length, uppercase, numbers, symbols) {
  let charCodes = LOWERCASE_CHARCODES;
  if (uppercase) {
    charCodes = charCodes.concat(UPPERCASE_CHARCODES);
  }
  if (numbers) {
    charCodes = charCodes.concat(NUMBER_CHARCODES);
  }
  if (symbols) {
    charCodes = charCodes.concat(SYMBOL_CHARCODES);
  }

  const passwordChars = [];

  for (let i = 0; i < length; i++) {
    const char = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordChars.push(String.fromCharCode(char));
  }
  return passwordChars.join("");
}

// Create array
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

function createPassword(e) {
  e.preventDefault();

  const length = Number(document.querySelector("#length").value);
  const lowercase = document.querySelector("#lowercase").checked;
  const uppercase = document.querySelector("#uppercase").checked;
  const numbers = document.querySelector("#numbers").checked;
  const symbols = document.querySelector("#symbols").checked;

  if (length < 8 || length > 128) {
    lengthError = "Must be between 8 and 128";
    alert(lengthError);
  }

  if (
    lowercase === false &&
    uppercase === false &&
    numbers === false &&
    symbols === false
  ) {
    charError = "At least one character type should be selected";
    alert(charError);
  }

  password = generatePassword(length, uppercase, numbers, symbols);
  document.querySelector("#password").value = password;
}

// Write password to the password input
function writePassword() {
  questions.style.display = "block";
}
// Event listener to generate button
generateBtn.addEventListener("click", writePassword);
createPasswordBtn.addEventListener("click", createPassword);
