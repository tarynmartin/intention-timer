class Activity {
  constructor(category, description, minutes, seconds) {
    this.id = Date.now();
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
  }

  startTimer(duration, display) {
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
    return this.id;
  }

  markComplete() {
    return this.complete= true;
  }

  saveToStorage() {
    // user clicks on the log activity button
    // changes left-title class from `Current Activity` to `Completed Activity`
    // hides description, timer, circle and message, and log activty button
    // diplays `CREATE A NEW ACTIVITY` button
    // hides the article class default value message
    // displays new tile that includes, this.category, this.minutes, this.seconds, this.description, and color id;
    var storage;
  }
}
