
var userDescription = document.querySelector('.info-added');
var userMin = document.querySelector('.min-input');
var userSec = document.querySelector('.sec-input');
var startBtn = document.querySelector('.start-activity-btn');
var activityContainer = document.querySelector('.btn-container');



var activityContainer = document.querySelector('.btn-container');

 


activityContainer.addEventListener('click', changeColor);


function changeColor(event) { 
  if (event.target.className === 'study-btn') {
    alert('WE DID IT!')
  } else if (event.target.className === 'meditate-btn') {
    alert('HELL YEAH!!!')
  } else if (event.target.className === 'exercise-btn') {
    alert('BOOOOOOM!')
  }
}
