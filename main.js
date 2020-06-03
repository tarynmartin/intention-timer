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
var timerDisplay = document.querySelector("#time");
var newActivityForm = document.querySelector('.form-input');

var currentActivity;
var activitiesArray = []; //this is the data model
 var currentCategory;

activityContainer.addEventListener('click', changeColor);
newActivityForm.addEventListener('submit', createActivity);
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
  var timerInputDescription = document.querySelector('.user-input-description');
  var timeDisplayTimer = document.querySelector('#time');

  timerInputDescription.innerHTML = activitiesArray[0].description;
  timeDisplayTimer.innerHTML = `${activitiesArray[0].minutes}:${activitiesArray[0].seconds}`

  newActivityView.classList.add('hidden');
  currentActivityView.classList.remove('hidden');
}

function createActivity() {
  checkInput()
  var currentDescription = userDescription.value;
  var currentMinutes = userMin.value;
  var currentSeconds = userSec.value;
  var currentActivity = new Activity(currentCategory, currentDescription, currentMinutes, currentSeconds);

  activitiesArray.push(currentActivity);

  changeView()
  event.preventDefault();
}

function checkInput() {
  var minutesError = document.querySelector('.minutes-error');
  var secondsError = document.querySelector('.seconds-error');
  var categoryError = document.querySelector('.category-error');
  var descriptionError = document.querySelector('.description-error');

  if (currentCategory === undefined) {
    return categoryError.innerHTML = "<img class=\"warning-icon\" src=\"assets/warning.svg\">A category is required";
  } else if (userDescription.value.length < 1) {
    return descriptionError.innerHTML = "<img class=\"warning-icon\" src=\"assets/warning.svg\">A description is required";
  }else if (userMin.value === '') {
    return minutesError.innerHTML = "<img class=\"warning-icon\" src=\"assets/warning.svg\">Minutes are required";
  }else if (userSec.value === '') {
    return secondsError.innerHTML = "<img class=\"warning-icon\" src=\"assets/warning.svg\">Seconds are required";
  }
}

function verifyNumberInput(event) {
  if (parseInt(event.target.value) <= 0 || parseInt(event.target.value) >= 60) {
    event.target.value = null;
    return verifyNumber.innerHTML = "<img class=\"warning-icon\" src=\"assets/warning.svg\">Choose number between 0 and 60";
  }
}

function stopEInput(event) {
  if (event.key === "e" || event.key === "E") {
    event.preventDefault();
  }
}

function startClock() {
  var userInput = (currentActivity.minutes + currentActivity.seconds),

  display = document.querySelector('#time');

  currentActivity.startTimer(userInput, display);
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
