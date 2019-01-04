class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getUTCHours();
    this.minutes = date.getUTCMinutes();
    this.seconds = date.getUTCSeconds();
    this.printTime();
    
    setInterval(this._tick.bind(this), 1000);
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
  }

  printTime() {
    console.log(`${ this.hours}:${ this.minutes }:${ this.seconds }`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this._incrementSecond();
    this.printTime();
  }

  _incrementHour() {
    if (this.hours === 23) {
      this.hours = 0;
    }
    else {
      this.hours++;
    }
  }

  _incrementMinute() {
    if (this.minutes === 59) {
      this.minutes = 0;
      this._incrementHour();
    }
    else {
      this.minutes++;
    }
  }

  _incrementSecond() {
    if (this.seconds === 59) {
      this.seconds = 0;
      this._incrementMinute();
    }
    else {
      this.seconds++;
    }
  }
}

const clock = new Clock();