
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
  } else {
    alert('BOOOOOOM!')
  }
}

// event.target.className === ‘study-btn’ 
// studyBtn.classList.add(‘.study-color”) 
//   console.log(event.target); 
// }


// startBtn.addEventListener('click', startActivity);
//
//
// studyBtn.addEventListener('click', selectActivity(event));
//
// function selectActivity(event) {
//   return 'hello'
// }

// activityContainer.style.color = 'red';

// function startActivity(event) {
//   currentCover = newRandomCover();
// bookCover.setAttribute("src", currentCover.cover);
// tagline1.innerText = currentCover.tagline1;
// tagline2.innerText = currentCover.tagline2;
// bookTitle.innerText = currentCover.title;
  // if (startBtn === click) {
  //   call function to check input fields (this function should return an error message if an input is missing)
  // }
  // if (checkInput function === true) {
  // var currentActivity = new Activity(event.className, input.info-added, input.min-input, input.sec-input)
  // call displayTimer();
  // }
// }


// function checkInput() {
//   if (btn-container != 'click') {
//   return error message "Please choose a category"
// } else if (userDescription == '') {
//   return error message "A description is required"
// } else if (userMin === '') {
//   return error message "A minute limit is required";
// }else if (userSec === '') {
//   return error message "A second limit is required";
// }
// }
//
//
// function displayTimer() {
//   add hidden to new-activity or left background element
//   remove hidden from timer html
//   currentActivity.category === color for CSS
//   currentActivity.minute === minute for html
//   currentActivity.seconds === seconds for html
//   currentActivity.description === description for html
// }
//














// var minInput = document.querySelector('.min-input');

// var secInput = document.querySelector('.sec-input');
//
//
// minInput.addEventListener('keyup', checkMinInput);
//
// function checkMinInput(event) {
//   if(!event.willCommit) {
//      if(/^\d{2}$/.test(event.value) && event.selStart == 2)
//          event.change = "/" + event.change;
//      var aRslt = event.value.split("");
//      aRslt.splice(event.selStart, event.selEnd - event.selStart, event.change);
//      var strTest = aRslt.join("");
//      var rpat = /^\d{0,2}([/]\d{0,2})?$/;
//      event.rc = rpat.test(strTest);
//   }
//   else
//   {
//      var rpat = /^(\d{0,2}([/]\d{0,2}))?$/;
//      event.rc = (event.value != "") || rpat.test(event.value);
//   }
// }




// keydown	ANY key is pressed
// keypress	ANY key (except Shift, Fn, or CapsLock) is in pressed position. (Fired continously.)
// keyup	ANY key is released
