class Activity {
  constructor(category, description, minutes, seconds) {
    this.id = Date.now();
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
  }

  startTimer() {
    // This should start the timer for whatever activity selected
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
