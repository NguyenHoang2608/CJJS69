class Clock {
  $container;
  $time;
  $startBtn;
  $pauseBtn;
  $stopBtn;

  _time = 0;
  _interval;

  constructor() {
    this.$container = document.createElement("div");

    this.$time = document.createElement("h2");
    this.$time.classList.add("time");
    this.$time.textContent = this.formatSecond(this._time);

    this.$startBtn = document.createElement("button");
    this.$startBtn.textContent = "Start";
    this.$startBtn.addEventListener("click", this.startTime);

    this.$pauseBtn = document.createElement("button");
    this.$pauseBtn.textContent = "Pause";
    this.$pauseBtn.addEventListener("click", this.pauseTime);

    this.$stopBtn = document.createElement("button");
    this.$stopBtn.textContent = "Stop";
    this.$stopBtn.addEventListener("click", this.stopTime);
  }

  formatSecond = (seconds)=> {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    let time = "";

    if (m < 10 && s < 10) {
      time = `0${m}:0${s}`;
    } else if (s < 10 && m >= 10) {
      time = `${m}:0${s}`;
    } else if (s >= 10 && m < 10) {
      time = `0${m}:${s}`;
    } else {
      time = `${m}:${s}`;
    }
    return time;
  }
   formatTime = (seconds)=>{
    let m = Math.floor(seconds/60);
    let s = seconds % 60;
    return `${m}:${s}`;
  }

  startTime = () => {
    if(this._interval){
      return;
    }
    this._interval = setInterval(() => {
      this._time += 1;
      this.$time.textContent = this.formatTime(this._time);
    }, 1000);
  }

  pauseTime = () => {
    clearInterval(this._interval);
    this._interval = null;
  };

  stopTime = () => {
    this._time = 0;
    this.$time.textContent = this.formatTime(this._time);
    clearInterval(this._interval);
  };

  render() {
    this.$container.appendChild(this.$time);
    this.$container.appendChild(this.$startBtn);
    this.$container.appendChild(this.$pauseBtn);
    this.$container.appendChild(this.$stopBtn);

    return this.$container;
  }
}

const clock = new Clock();
document.getElementById("app").appendChild(clock.render());

document.getElementById("add").addEventListener("click", () => {
  let newClock = new Clock();
  document.getElementById("app").appendChild(newClock.render());
});

class Input {
  $inputEl;
  constructor(type, placeholder) {
    this.$inputEl = document.createElement("input");
    this.$inputEl.type = type;
    this.$inputEl.placeholder = placeholder;
  }

  render() {
    return this.$inputEl;
  }
}
