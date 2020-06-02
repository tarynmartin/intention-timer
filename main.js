var userDescription = document.querySelector('.info-added');
var userMin = document.querySelector('.minutes-input');
var userSec = document.querySelector('.sec-input');
var startBtn = document.querySelector('.start-btn');
var activityContainer = document.querySelector('.btn-container');
var studyIcon = document.querySelector('.study-icon');
var meditateIcon = document.querySelector('.meditate-icon');
var exerciseIcon = document.querySelector('.exercise-icon');
var studyBtn = document.querySelector('.study-btn');
var meditateBtn = document.querySelector('.meditate-btn');
var exerciseBtn = document.querySelector('.exercise-btn');
var startClockBtn = document.querySelector('.start-clock-btn');
var verifyNumber = document.querySelector('.verify-number');

var currentActivity;
 var currentCategory;

activityContainer.addEventListener('click', changeColor);
startBtn.addEventListener('click', startActivity);
startClockBtn.addEventListener('click', startClock);
userMin.addEventListener('keypress', stopEInput);
userSec.addEventListener('keypress', stopEInput);
userMin.addEventListener('keyup', verifyNumberInput);
userSec.addEventListener('keyup', verifyNumberInput);

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
  studyBtn.classList.add('study-btn-active');
  studyIcon.src = 'assets/study-active.svg';
  meditateBtn.classList.remove("meditate-btn-active");
  meditateIcon.src = "assets/meditate.svg";
  exerciseBtn.classList.remove('exercise-btn-active');
  exerciseIcon.src = "assets/exercise.svg";
  startClockBtn.style.borderColor = '#B3FD78';

  currentCategory = ".study-btn-active";
}

function activateMeditate() {
  meditateBtn.classList.add('meditate-btn-active');
  meditateIcon.src = 'assets/meditate-active.svg';
  exerciseBtn.classList.remove('exercise-btn-active');
  exerciseIcon.src = "assets/exercise.svg";
  studyBtn.classList.remove('study-btn-active');
  studyIcon.src = 'assets/study.svg';
  startClockBtn.style.borderColor = '#C278FD';

  currentCategory = ".meditate-btn-active";
}

function activateExercise() {
  exerciseBtn.classList.add('exercise-btn-active');
  exerciseIcon.src = 'assets/exercise-active.svg';
  studyBtn.classList.remove('study-btn-active');
  studyIcon.src = 'assets/study.svg';
  meditateBtn.classList.remove("meditate-btn-active");
  meditateIcon.src = "assets/meditate.svg";
  startClockBtn.style.borderColor = '#FD8078';

  currentCategory = "exercise-btn-active";
}

// homeView.classList.add('hidden');
// savedView.classList.remove('hidden');
// homeButton.classList.remove('hidden');
// clasclass







// determine view states
// choose activity view
// current activity view
// eventually we will need to create past activity view
// view is changned on click by clicking start activity button
// remove choose view
// add current activity view



// current activity
// cirgle


function changeView() {
  var newActivityView = document.querySelector('.new-activity');
  var currentActivityView = document.querySelector('.current-activity');

  newActivityView.classList.add('hidden');
  currentActivityView.classList.remove('hidden');
}

function startActivity(event) {
  checkInput();
}

function createActivity() {
  var currentDescription = userDescription.value;
  var currentMinutes = userMin.value;
  var currentSeconds = userSec.value;
  var currentActivity = new Activity(currentCategory, currentDescription, currentMinutes, currentSeconds);

  changeView();
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
  if (parseInt(event.target.value) <= 0 || parseInt(event.target.value) >= 60) {
    return verifyNumber.innerHTML = "<img class=\"warning-icon\" src=\"assets/warning.svg\">Choose number between 0 and 60";
  }
}

function stopEInput(event) {
  if (event.key === "e" || event.key === "E") {
    event.preventDefault();
  }
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function startClock() {
  userMinutes = userMin.value;
  userSeconds = userSec.value;
  var userInput = (6 * userMinutes + userSeconds),
    display = document.querySelector('#time');
  startTimer(userInput, display);
}

// var deadline = date.Now()
// function getUserTime(endtime) {
//   var userMin = 2;
//   var userSec = 30;
//   return {
//     minutes: userMin,
//     seconds: userSec,
//   }
// }
