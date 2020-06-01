
var userDescription = document.querySelector('.info-added');
var userMin = document.querySelector('.min-input');
var userSec = document.querySelector('.sec-input');
var startBtn = document.querySelector('.start-btn');
var activityContainer = document.querySelector('.btn-container');
var studyIcon = document.querySelector('.study-icon');
var meditateIcon = document.querySelector('.meditate-icon');
var exerciseIcon = document.querySelector('.exercise-icon');
var studyBtn = document.querySelector('.study-btn');
var meditateBtn = document.querySelector('.meditate-btn');
var exerciseBtn = document.querySelector('.exercise-btn');
var startClockBtn = document.querySelector('.start-clock-btn')


var currentActivity;
 var currentCategory;

activityContainer.addEventListener('click', changeColor);
startBtn.addEventListener('click', startActivity);
userMin.addEventListener('keypress', verifyNumberInput);
userSec.addEventListener('keypress', verifyNumberInput);

function changeColor(event) { 
  if (event.target.className === 'study-btn' || event.target.className === 'study-icon') {
    activateStudy();
  } else if (event.target.className === 'meditate-btn' || event.target.className === 'meditate-icon') {
    activateMeditate();
  } else if (event.target.className === 'exercise-btn' || event.target.className === 'exercise-icon') {
    activateExercise();
  }
}

function activateStudy() {
  studyIcon.src = 'assets/study-active.svg';
  studyBtn.classList.add('study-btn-active');
  meditateBtn.classList.remove("meditate-btn-active");
  meditateIcon.src = "assets/meditate.svg";
  exerciseBtn.classList.remove('exercise-btn-active');
  exerciseIcon.src = "assets/exercise.svg";
  currentCategory = ".study-btn-active";
}

function activateMeditate() {
  meditateIcon.src = 'assets/meditate-active.svg';
  meditateBtn.classList.add('meditate-btn-active');
  exerciseBtn.classList.remove('exercise-btn-active');
  exerciseIcon.src = "assets/exercise.svg";
  studyIcon.src = 'assets/study.svg';
  studyBtn.classList.remove('study-btn-active');
  currentCategory = ".meditate-btn-active";
}

function activateExercise() {
  exerciseIcon.src = 'assets/exercise-active.svg';
  exerciseBtn.classList.add('exercise-btn-active');
  studyIcon.src = 'assets/study.svg';
  studyBtn.classList.remove('study-btn-active');
  meditateBtn.classList.remove("meditate-btn-active");
  meditateIcon.src = "assets/meditate.svg";
  currentCategory = "exercise-btn-active";
}

function startActivity(event) {
  checkInput();
}

function createActivity() {
  var currentDescription = userDescription.value;
  var currentMinutes = userMin.value;
  var currentSeconds = userSec.value;
var currentActivity = new Activity(currentCategory, currentDescription, currentMinutes, currentSeconds);
console.log(currentActivity);
}

function checkInput() {
  var minutesError = document.querySelector('.minutes-error');
  var secondsError = document.querySelector('.seconds-error');
  var categoryError = document.querySelector('.category-error');
  var descriptionError = document.querySelector('.description-error');

  if (currentCategory === undefined) {
    return categoryError.innerHTML = "<img class=\"warning-icon\" src=\"assets/warning.svg\">A category is required";
  } else if (userDescription.value.length < 3) {
    return descriptionError.innerHTML = "<img class=\"warning-icon\" src=\"assets/warning.svg\">A description is required";
  }else if (userMin.value === '') {
    return minutesError.innerHTML = "<img class=\"warning-icon\" src=\"assets/warning.svg\">Minutes are required";
  }else if (userSec.value === '') {
    return secondsError.innerHTML = "<img class=\"warning-icon\" src=\"assets/warning.svg\">Seconds are required";
  }
  createActivity();
}

function verifyNumberInput(event) {
  var verifyNumber = document.querySelector('.verify-number');

  if (event.key === "e" || event.key === "E") {
    event.preventDefault();
  } else if (parseInt(event.target.value) <= 0 || parseInt(event.target.value) >= 60) {
    return verifyNumber.innerHTML = "<img class=\"warning-icon\" src=\"assets/warning.svg\">Choose number between 0 and 60";
  }
}

// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10)
//         seconds = parseInt(timer % 60, 10);
//
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//
//         display.textContent = minutes + ":" + seconds;
//
//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }
//
// function startClock() {
//   userMinutes = 1
//   userSeconds = 2
//   var userInput = (60 * userMinutes + userSeconds),
//     display = document.querySelector('#time');
//   startTimer(userInput, display);
// }

// var deadline = date.Now()
// function getUserTime(endtime) {
//   var userMin = 2;
//   var userSec = 30;
//   return {
//     minutes: userMin,
//     seconds: userSec,
//   }
// }
