//DOM element selection
const numberButtons = document.querySelectorAll('.number-btn');
const opButtons = document.querySelectorAll('.op-btn');
const displayElement = document.querySelector('.display');
const enterBtn = document.querySelector('#enter');

// store an input value
// select an operation to perform
// store a second input value
// output the computed value

let x; //value 1
let y; //value 2
let op; //operation
let result;
let display = new Array(3);

function updateDisplay() {
  displayElement.textContent = display.join(' ');
}

function setNumber(event) {
let number = parseInt(event.target.value);

  if (display[0] == undefined) {
  x = number;
   display[0] = x;
   } else {
    y = number;
     display[2] = y;
}

  updateDisplay();
}

function setOp(event) {
  op = event.target.value;
  display[1] = op;

  updateDisplay();
}

function calculateResult() {
  if (op == '+') {
    result = x + y;
  } else if (op == '-') {
    result = x - y;
  } else if (op == '*') {
    result = x * y;
  } else if (op == '/') {
    result = x / y;
  }

  displayElement.textContent = result;
  display = new Array(3);
}

enterBtn.addEventListener('click', calculateResult);

for (i = 0, ii=numberButtons.length; i<ii; i++) {
  let button = numberButtons[i]
  button.addEventListener('click', setNumber);
}

for (i = 0, ii=opButtons.length; i<ii; i++) {
  let button = opButtons[i]
  button.addEventListener('click', setOp);
}

let info = document.getElementById("info")
let guideBtn = document.getElementById("guideBtn")
let closeGuideBtn = document.getElementById("closeGuideBtn")
    
function reveal () {
  info.style.display = "block"
  guideBtn.style.display = "none"
  closeGuideBtn.style.display = "block"
}

function closeGuide () {
  info.style.display = "none"
  guideBtn.style.display = "block"
  closeGuideBtn.style.display = "none"
}