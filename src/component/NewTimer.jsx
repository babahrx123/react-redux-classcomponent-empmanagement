import { Component } from "react";
import "./Timer.css";

class NewTimer extends Component {
  constructor() {
    super();
    this.state = {
      isTimerRunning: "Start",
    };
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  handleOnChangeSetTime = () => {
    const hoursField = document.getElementById("hours");
    const minutesField = document.getElementById("minutes");
    const secondsField = document.getElementById("seconds");
    this.seconds += 1
    if(this.seconds === 60) {
        this.minutes +=1
        this.seconds = 0
    }
    if(this.minutes === 60) {
        this.hours +=1
        this.minutes = 0
    }
    if(this.hours === 24) {
        this.hours = 0
    }

    if(this.hours < 10) {
        hoursField.innerHTML = `0${this.hours}:`;
    } else {
        hoursField.innerHTML = this.hours;
    }
    if(this.minutes < 10) {
        minutesField.innerHTML = `0${this.minutes}:`;
    } else {
        minutesField.innerHTML = this.minutes;
    }
    if(this.seconds <10) {
        secondsField.innerHTML = `0${this.seconds}`;
    } else {
        secondsField.innerHTML = this.seconds;
    }

  }
  handleOnChangeStart = () => {
    if(this.state.isTimerRunning === "Start") {
        this.setState({isTimerRunning: "TRunning"});
        this.timer = setInterval(() => {
            this.handleOnChangeSetTime();
        }, 1000);
    }
  }

  handleOnChangePause = () => {
    if(this.state.isTimerRunning === "TRunning") {
        clearInterval(this.timer);
        this.setState({isTimerRunning: "Stopped"})
        return;
    }
  }

  handleOnChangeResume = () => {
    if(this.state.isTimerRunning === "Stopped") {
        this.setState({isTimerRunning: "TRunning"});
        this.timer = setInterval(() => {
            this.handleOnChangeSetTime();
        }, 1000);
    }
  }

  handleOnChangeReset = () => {
    this.hours =0 ;
    this.minutes = 0;
    this.seconds = 0;
    const hoursField = document.getElementById("hours");
    const minutesField = document.getElementById("minutes");
    const secondsField = document.getElementById("seconds");
    hoursField.innerHTML ="00:";
    minutesField.innerHTML ="00:";
    secondsField.innerHTML ="00";
    this.setState({isTimerRunning: "Start"})
    clearInterval(this.timer)
    
  }

  render() {
    return (
      <div className="timer">
        <h2>React Stopwatch</h2>
        <div className="timerBody">
          <div className="timerHead">
            <span id="hours">00:</span>
            <span id="minutes">00:</span>
            <span id="seconds">00</span>
          </div>
          <div>
            {
                this.state.isTimerRunning === "Start" ?   <button onClick={this.handleOnChangeStart}>Start</button>
                
                : (this.state.isTimerRunning === "TRunning" ? <button onClick={this.handleOnChangePause}>Pause</button> 
                
                : <button onClick={this.handleOnChangeResume}>Resume</button>)
            }
            <button onClick={this.handleOnChangeReset}>Reset</button>
            
          </div>
        </div>
      </div>
    );
  }
}

export default NewTimer;
