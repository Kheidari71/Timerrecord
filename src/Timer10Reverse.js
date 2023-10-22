import React from "react";
import {createRoot} from 'react-dom/client';

var isStarted= false;
var interval;

class Timer extends React.Component{
    constructor(){
      super();
      this.state = {
        time : 10
      }
    }

    startTimer = () => {
        if (this.state.time > 0) { // Check if time is greater than 0
          interval = setInterval(() => {
            this.setState({
              time: this.state.time - 1
            })
          }, 1000)
        }
      }
 
  StopInterval = ()=>{
    clearInterval(interval)
}


componentDidUpdate(){
    if (this.state.time == 0){
        this.StopInterval();
    }
  }
    render(){
      
      return(
        <div className="div">
  <h2 className='timerBg'>
    it is {this.state.time}
    </h2>
    <button className="btn" onClick={this.startTimer}>Start</button>
<button className="btn" onClick={this.StopInterval}>Stop</button>

    </div>
      )
    }
  }

  export default Timer;