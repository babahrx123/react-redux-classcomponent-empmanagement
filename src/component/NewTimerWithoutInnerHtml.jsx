import { Component } from "react";
import "./Timer.css";
class NewTimerWithoutInnerHtml extends Component {
  constructor() {
    super();
    this.state = {
      isTimerRunning: false,
      seconds: 0,
    };
    this.minutes = 0;
    this.hours = 0;
  }

  handleOnChangeSetTime = () => {
    this.setState({ seconds: this.state.seconds + 1 });
    if (this.state.seconds === 59) {
      this.minutes += 1;
      this.setState({ seconds: 0 });
    }
    if (this.minutes === 59) {
      this.hours += 1;
      this.minutes = 0;
    }
    if (this.hours === 24) {
      this.hours = 0;
    }
  };

  handleOnChangeStart = () => {
    this.setState({ isTimerRunning: "Pause" });
    this.timer = setInterval(() => {
      this.handleOnChangeSetTime();
    }, 1000);
  };

  handleOnChangePause = () => {
    this.setState({ isTimerRunning: "Resume" });
    clearInterval(this.timer);
  };

  handleOnChangeResume = () => {
    this.setState({ isTimerRunning: "Pause" });
    this.timer = setInterval(() => {
        this.handleOnChangeSetTime();
    }, 1000);
  };
  handleOnChangeReset = () => {
    this.setState({ isTimerRunning: false, seconds: 0 });
    this.hours = 0;
    this.minutes = 0;
    clearInterval(this.timer);
  };

  render() {
    return (
      <div className="timer">
        <h2>React Stopwatch</h2>
        <div className="timerBody">
          <div className="timerHead">
            <span id="hours">
              {this.hours < 10 ? "0" + this.hours + ":" : this.hours + ":"}
            </span>
            <span id="minutes">
              {this.minutes < 10
                ? "0" + this.minutes + ":"
                : this.minutes + ":"}
            </span>
            <span id="seconds">
              {this.state.seconds < 10
                ? "0" + this.state.seconds
                : this.state.seconds}
            </span>
          </div>
          <div>
            {this.state.isTimerRunning ? (
              this.state.isTimerRunning === "Pause" ? (
                <button onClick={this.handleOnChangePause}>Pause</button>
              ) : (
                <button onClick={this.handleOnChangeResume}>Resume</button>
              )
            ) : (
              <button onClick={this.handleOnChangeStart}>Start</button>
            )}
            <button onClick={this.handleOnChangeReset}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}
export default NewTimerWithoutInnerHtml;
