import { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      isTimerStarted: "Start",
    };
  }
  hours = 0;
  minutes = 0;
  seconds = 0;

  startTimer = () => {
      if (this.state.isTimerStarted === "Pause" || this.state.isTimerStarted ==="Start"  ) {
        this.timer = setTimeout(() => {
            this.handleOnChangeTimer();
        }, 1000);
      } 
      else {
        clearTimeout(this.timer); 
        console.log(this.state.isTimerStarted)
      }
  };

  handleOnChangeTimer = () => {
    const secondsField = document.getElementById("seconds");
    const hoursField = document.getElementById("hours");
    const minutesField = document.getElementById("minutes");

    this.seconds = this.seconds + 1;

    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes += 1
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours += 1
    }
    if (this.hours === 24) {
      this.hours = 0;
    }
    

    if(this.seconds < 10) {
        secondsField.innerHTML = "0"+this.seconds;
    } else {
        secondsField.innerHTML = this.seconds;
    }
    if(this.minutes < 10) {
        minutesField.innerHTML = "0"+this.minutes+":";
    } else {
        minutesField.innerHTML = this.minutes+":";
    }
    if(this.hours < 10) {
        hoursField.innerHTML = "0"+this.hours+":";
    } else {
        hoursField.innerHTML = this.hours+":";
    }
    console.log(this.seconds)
    this.startTimer();
  };

  handleOnChangeStart = () => {
    this.timer = setTimeout(() => {
      
    }, 1000);
  }

  handleOnChangePause = () => {
    this.setState({isTimerStarted: "Resume"});
    this.setState({isTimerStarted: "Pause"})
  }

  handleOnChangeResume = () => {
    console.log(this.state.isTimerStarted);
    this.startTimer();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    console.log("end");
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
            {(this.state.isTimerStarted === "Start") ? (
              <button
                onClick={() => {this.handleOnChangeStart()}}>
                Start
              </button>
            ) : 
                <>
                    {this.state.isTimerStarted === "Pause" ? 
                        <button onClick={() => {this.handleOnChangePause()}}>
                          Pause</button> 

                    : <button onClick={() => {this.handleOnChangeResume()}}>
                        Resume</button>
                    }
                </>
            }
            
            {/* <button
              onClick={() => {
                this.setState({
                  hours: 0,
                  minutes: 0,
                  seconds: 0,
                  isTimerStarted: "Reset",
                });
              this.startTimer()}}
            >
              Reset
            </button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;


// import { Component } from 'react';
// import './App.css';
// //import NewTimer from './component/NewTimer';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isIntervalRunning: false
//     }
//   }
//   handleStart = () => {
//     if (!this.state.isIntervalRunning) {
//       this.setState({isIntervalRunning: true})
//       this.interval = setInterval(() => {
//         console.log("Hello");
//       }, 1000);
//     }
//   };
  
//   handleStop = () => {
//     if(this.state.isIntervalRunning) {
//       clearInterval(this.interval);
//       this.setState({isIntervalRunning: false})
//     }
//   };

//   render() {
//     return(
//       <div>
//         <button onClick={() => this.handleStart()}>Start</button>
//         <button onClick={() => this.handleStop()}>Stop</button>
//     </div>
//     )
//   }
// }

// export default App;
