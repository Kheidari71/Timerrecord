import React from "react";
import moment from "moment-timezone";

class TimerReverse extends React.Component {
  constructor() {
    super();
    this.state = {
      time: moment.tz("America/Toronto").format("HH:mm:ss"),
      reverse: false,
    };
    this.interval = null;
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startTimer = () => {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        const currentTime = moment(prevState.time, "HH:mm:ss");
        const targetTime = moment("00:00:00", "HH:mm:ss");
        if (this.state.reverse) {
          if (currentTime.isSameOrBefore(targetTime)) {
            clearInterval(this.interval);
          } else {
            currentTime.subtract(1, "second");
            return { time: currentTime.format("HH:mm:ss") };
          }
        }
      });
    }, 1000);
  };

  handleStartReverse = () => {
    if (!this.state.reverse) {
      this.setState({ reverse: true }, () => {
        this.startTimer();
      });
    }
  };

  render() {
    console.log("render");

    return (
      <div className="div">
        <h2 className="timerBg">it is {this.state.time}</h2>
        <button className="btn" onClick={this.handleStartReverse}>Start Reverse Timer</button>
      </div>
    );
  }
}

export default TimerReverse;
