
var userDescription = document.querySelector('.info-added');
var userMin = document.querySelector('.min-input');
var userSec = document.querySelector('.sec-input');
var startBtn = document.querySelector('.start-activity-btn');
var activityContainer = document.querySelector('.btn-container');
var studyIcon = document.querySelector('.study-icon');
var meditateIcon = document.querySelector('.meditate-icon');
var exerciseIcon = document.querySelector('.exercise-icon');
var studyBtn = document.querySelector('.study-btn');
var meditateBtn = document.querySelector('.meditate-btn');
var exerciseBtn = document.querySelector('.exercise-btn');


var activityContainer = document.querySelector('.btn-container');

 

activityContainer.addEventListener('click', changeColor);


function changeColor(event) { 
  if (event.target.className === 'study-btn') {
    studyIcon.src = 'assets/study-active.svg';
    studyBtn.classList.add('study-btn-active');
  } else if (event.target.className === 'meditate-btn') {
    meditateIcon.src = 'assets/meditate-active.svg';
    meditateBtn.classList.add('meditate-btn-active');
  } else if (event.target.className === 'exercise-btn') {
    exerciseIcon.src = 'assets/exercise-active.svg';
    exerciseBtn.classList.add('exercise-btn-active');
  }
}
// tagline1.innerText = tagline1Input.value;
// tagline2.innerText = tagline2Input.value;
// bookTitle.innerText = titleInput.value;
