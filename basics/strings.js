// =====================================================================================
//                                METHODS OF STRINGS
// =====================================================================================

// -------------------------------------------------------------------------------------
// DISCONTINUED & DEPRECATED METHODS (Kept for reference only)
// -------------------------------------------------------------------------------------
// - anchor(): Discontinued. Used to create HTML anchor tags dynamically.
// - big(): Discontinued. Made text font size bigger in old browsers.
// - blink(): Deprecated. Made text blink on the webpage.
// - bold(): Deprecated. Wrapped text in <b> tags to make it bold.
// - fixed(): Deprecated. Wrapped text in <tt> tags for monospaced font.
// - fontcolor(): Deprecated. Changed text color using <font> tags.
// - fontsize(): Deprecated. Changed text size using <font> tags.
// - italics(): Deprecated. Wrapped text in <i> tags to make it italic.


// =====================================================================================
// SECTION 1: THE MULTI-METHOD SELECTOR (Dropdown Tool)
// =====================================================================================
function selectMethod() {
  // 1. Grab all the HTML elements we need
  const sentenceElement = document.getElementById("sentence");
  const resultDisplay = document.getElementById("result");
  const statusDisplay = document.getElementById("status");
  const inputElement = document.getElementById("userInput");
  const modeSelect = document.getElementById("inputMode");

  // 2. Get the actual values inside those elements
  const sentenceText = sentenceElement.innerText;
  const userInput = inputElement.value;
  const selectedMethod = modeSelect.value;

  // 3. Clear previous results on the screen so we start fresh
  resultDisplay.innerText = "";
  statusDisplay.innerText = "";

  // 4. Check if they forgot to select a method
  if (selectedMethod === "select") {
    resultDisplay.innerText = "Please select a method first.";
    statusDisplay.innerText = "false";
    return; // Exit the function immediately
  }

  // --- Run the code based on the chosen method ---

  if (selectedMethod === "indexOf") {
    // indexOf searches for a word/letter and returns its position
    resultDisplay.innerText = sentenceText.indexOf(userInput);
    statusDisplay.innerText = "true";
  } 
  
  else if (selectedMethod === "at") {
    // at() expects a number index, so we convert the user's input to a number
    const indexNumber = parseInt(userInput, 10);

    // Make sure the index is a valid number and inside the boundaries of the sentence
    if (isNaN(indexNumber) || indexNumber < -sentenceText.length || indexNumber >= sentenceText.length) {
      resultDisplay.innerText = "Invalid Index Number";
      statusDisplay.innerText = "false";
    } else {
      resultDisplay.innerText = sentenceText.at(indexNumber);
      statusDisplay.innerText = "true";
    }
  } 
  
  else if (selectedMethod === "charcodeat") {
    const indexNumber = parseInt(userInput, 10);

    if (isNaN(indexNumber) || indexNumber < 0 || indexNumber >= sentenceText.length) {
      resultDisplay.innerText = "Invalid Index Number";
      statusDisplay.innerText = "false";
    } else {
      resultDisplay.innerText = sentenceText.charCodeAt(indexNumber);
      statusDisplay.innerText = "true";
    }
  } 
  
  else if (selectedMethod === "codepointat") {
    const indexNumber = parseInt(userInput, 10);

    if (isNaN(indexNumber) || indexNumber < 0 || indexNumber >= sentenceText.length) {
      resultDisplay.innerText = "Invalid Index Number";
      statusDisplay.innerText = "false";
    } else {
      resultDisplay.innerText = sentenceText.codePointAt(indexNumber);
      statusDisplay.innerText = "true";
    }
  } 
  
  else if (selectedMethod === "concat") {
    // concat merges the sentence and the user's input together
    resultDisplay.innerText = sentenceText.concat(userInput);
    statusDisplay.innerText = "true";
  } 
  
  else if (selectedMethod === "endsWith") {
    // endsWith checks if the sentence ends with the user's input (returns true/false)
    resultDisplay.innerText = sentenceText.endsWith(userInput);
    statusDisplay.innerText = "true";
  }
  else if( selectedMethod === "includes"){
    resultDisplay.innerText = "The given value is present in the sentence."
    statusDisplay.innerText = "true";
  }
  else if(selectedMethod === "IsWellFormed"){
    resultDisplay.innerText = sentenceText.isWellFormed(userInput);
    statusDisplay.innerText = "true";
  }else{
    statusDisplay.innerText = "false";
  }
}


// =====================================================================================
// SECTION 2: INDIVIDUAL METHOD PLAYGROUNDS
// =====================================================================================

// -------------------------------------------------------------------------------------
// 1. at() Method
// -------------------------------------------------------------------------------------
function methodAt() {
  const sentence = document.getElementById("arrayAt").innerText;
  const index = parseInt(prompt("Enter index:"), 10);

  // Validate: Make sure the index is a real number and fits inside the sentence length
  if (!isNaN(index) && index >= -sentence.length && index < sentence.length) {
    const resultDisplay = document.getElementById("resultAt");
    const statusDisplayAt = document.getElementById("statusAt");
    
    resultDisplay.innerText = sentence.at(index);
    statusDisplayAt.innerText = "true";
  } else {
    alert(`Please select an index between 0 and ${sentence.length - 1}`);
  }
}

// -------------------------------------------------------------------------------------
// 2. charCodeAt() Method
// -------------------------------------------------------------------------------------
function methodCharCodeAt() {
  const sentence3 = document.getElementById("CharCodeAt").innerText;
  const resultDisplay3 = document.getElementById("result3");
  const statusDisplay3 = document.getElementById("status3");
  const inputElement3 = document.getElementById("index3");

  // Safety Check
  if (!sentence3 || !resultDisplay3 || !statusDisplay3 || !inputElement3) {
    console.error("Required HTML elements are missing from the source page");
    return;
  }

  const index3 = parseInt(inputElement3.value, 10);

  // Validate the index number
  if (!isNaN(index3) && index3 >= 0 && index3 < sentence3.length) {
    resultDisplay3.innerText = sentence3.charCodeAt(index3);
    statusDisplay3.innerText = "true";
  } else {
    resultDisplay3.innerText = "Invalid Index";
    statusDisplay3.innerText = "false";
  }
}

// -------------------------------------------------------------------------------------
// 3. codePointAt() Method
// -------------------------------------------------------------------------------------
function methodCodePointAt() {
  const sentence4 = document.getElementById("option").innerText;
  const resultDisplay4 = document.getElementById("result4");
  const statusDisplay4 = document.getElementById("status4");
  const inputElement = document.getElementById("index4");

  // Safety Check
  if (!sentence4 || !resultDisplay4 || !statusDisplay4 || !inputElement) {
    console.error("Required HTML elements are missing from the source page");
    return;
  }

  const index4 = parseInt(inputElement.value, 10);

  // Validate the index range
  if (!isNaN(index4) && index4 >= 0 && index4 < sentence4.length) {
    resultDisplay4.innerText = sentence4.codePointAt(index4);
    statusDisplay4.innerText = "true";
  } else {
    resultDisplay4.innerText = "Invalid Index";
    statusDisplay4.innerText = "false";
  }
}

// -------------------------------------------------------------------------------------
// 4. endsWith() Method
// -------------------------------------------------------------------------------------
function methodEndsWith() {
  const sentence = document.getElementById("sentenceEndsWith").innerText;
  const searchTerm = prompt("Enter the term (last word of the sentence):");
  
  const resultDisplay = document.getElementById("resultEnds");
  const statusDisplay = document.getElementById("statusEnds");

  // Safety check
  if (!resultDisplay || !statusDisplay) {
    console.error("Result or Status elements are missing.");
    return;
  }

  const endsWithTerm = sentence.endsWith(searchTerm);
  const includesTerm = sentence.includes(searchTerm);

  if (endsWithTerm) {
    resultDisplay.innerText = searchTerm;
    statusDisplay.innerText = "true";
  } else if (includesTerm && !endsWithTerm) {
    resultDisplay.innerText = "Enter the last term of sentence";
    statusDisplay.innerText = "false";
  } else {
    resultDisplay.innerText = "Term not found";
    statusDisplay.innerText = "false";
  }
}






// =====================================================================================
// REFERENCE CLASS: Credentials (Object-Oriented JavaScript)
// Purpose: Demonstrates how to write a BluePrint (Class) for user details, with validation.
// =====================================================================================
class Credentials {
  #password;

  constructor(username, email, password) {
    this.username = username;
    this.email = email; 
    this.#password = password;
  }

  set email(newEmail) {
    if (!newEmail.includes("@") || !newEmail.endsWith(".com")) {
      alert("Invalid Email Format");
      this._email = "Invalid Email";
    } else {
      this._email = newEmail;
    }
  }

  get email() {
    return this._email;
  }

  checkPassword(inputPassword) {
    return this.#password === inputPassword;
  }
}