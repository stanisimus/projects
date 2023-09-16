const outputPlace = document.querySelector("#The-place");
let liveCalculationString = "";
let liveNumber = "";
let isResult = 0;

const myArrClasses = [
  ".body-div",
  ".I",
  ".II",
  ".III",
  ".mid",
  ".bottom",
  ".g1",
  ".g2",
  ".g3",
];
/////////////////////////
function changeThemeI(className) {
  const allInstances = document.querySelectorAll(className);
  allInstances.forEach((node) => {
    node.classList.add("U");
    node.classList.remove("UUU");
    node.classList.remove("UU");
  });
}

function applyThemeI() {
  myArrClasses.forEach(changeThemeI);
  console.log(document.querySelector(".body-div").classList);
  console.log(document.querySelector(".mid").classList);
}

//////////////////////////////
function changeThemeII(className) {
  const allInstances = document.querySelectorAll(className);
  allInstances.forEach((node) => {
    node.classList.add("UU");
    node.classList.remove("U");
    node.classList.remove("UUU");
  });
}

function applyThemeII() {
  myArrClasses.forEach(changeThemeII);
  console.log(document.querySelector(".body-div").classList);
}

//////////////////////////////
function changeThemeIII(className) {
  const allInstances = document.querySelectorAll(className);
  allInstances.forEach((node) => {
    node.classList.add("UUU");
    node.classList.remove("UU");
    node.classList.remove("U");
  });
}

function applyThemeIII() {
  myArrClasses.forEach(changeThemeIII);
  console.log(document.querySelector(".body-div").classList);
}

////////////////

//////////////

function clickerNum(className) {
  if (isResult == 0) {
  } else {
    reset();
    isResult = 0;
  }

  const myBox = document.querySelector(className);
  const myNumber = myBox.innerHTML.replace(/[^0-9.]/g, "");
  let temporaryString = outputPlace.innerHTML;
  if (
    myNumber === "." &&
    (temporaryString.includes(".") || temporaryString === "")
  ) {
  } else {
    temporaryString += myNumber;
  }

  console.log(temporaryString);
  console.log(typeof outputPlace.innerHTML);
  outputPlace.innerHTML = temporaryString;
  liveNumber = temporaryString;
}

function myDelete() {
  if (isResult == 1) {
    outputPlace.innerHTML = "";
  }
  outputPlace.innerHTML = outputPlace.innerHTML.slice(0, -1);
}

function add() {
  if (liveNumber === "") {
  } else {
    if (isResult == 0) {
      liveCalculationString += liveNumber;
      liveCalculationString += "+";
      liveNumber = "";
      outputPlace.innerHTML = "";
    } else {
      isResult = 0;
      liveCalculationString += "+";
      liveNumber = "";
      outputPlace.innerHTML = "";
    }
  }
}

function subtract() {
  if (liveNumber === "") {
  } else {
    liveCalculationString += liveNumber;
    liveCalculationString += "-";
    liveNumber = "";
    outputPlace.innerHTML = "";
  }
}

function divide() {
  if (liveNumber === "") {
  } else {
    liveCalculationString += liveNumber;
    liveCalculationString += "/";
    liveNumber = "";
    outputPlace.innerHTML = "";
  }
}

function multiply() {
  if (liveNumber === "") {
  } else {
    liveCalculationString += liveNumber;
    liveCalculationString += "*";
    liveNumber = "";
    outputPlace.innerHTML = "";
  }
}

function reset() {
  outputPlace.innerHTML = "";
  liveCalculationString = "";
  liveNumber = "";
}

function calculate() {
  if (isResult == 1) {
  } else {
    liveCalculationString += liveNumber;
  }
  let result = eval(liveCalculationString);
  outputPlace.innerHTML = result;
  liveCalculationString = result;
  isResult = 1;
  console.log(liveCalculationString);
}
