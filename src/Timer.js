import React from 'react';
import TimeList from './TimeList';
import { TestContext } from './testContext';

var interval;

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
        hours : 0,
        minutes : 0,
        second : 0,
        isStarted : false
    }
  }

  static contextType = TestContext;

  startTimer = () => {
      if(this.state.isStarted == false){
        this.setState({
            isStarted : true
        })
        interval = setInterval(() => {
            this.setState({
                second: this.state.second +1
            })
            if(this.state.second == 59){
    this.setState({
        second : 0,
        minutes : this.state.minutes +1
    })
            }
            if(this.state.minutes == 60){
                this.setState({
                    minutes : 0,
                    hours : this.state.hours +1
                })
            }     
          }, 1000)
      }
  }

  stopTimer = () => {
    this.setState({
        isStarted :false
    })
    clearInterval(interval)
  }

resetTimer = () =>{
this.setState({
    hours : 0,
        minutes : 0,
        second : 0,
        isStarted: false
})
clearInterval(interval)
}

handleTimeArray = ()=>{
  // let h = this.state.hours
  //   let m = this.state.minutes
  //   let s = this.state.second
  //   let newTime = `${h > 9 ? h: "0" + h} : ${m > 9 ? m: "0" + m} : ${s > 9 ? s: "0" + s}`
  let newTime= document.querySelector('.timer').innerText;
    this.context.setTimerArr([...this.context.timeArr , newTime])
}

  render() {
    let h = this.state.hours;
    let m = this.state.minutes;
    let s = this.state.second;

    return (
      <div >
        <div className="timer rad">
        <h2 onClick={this.handleTimeArray}>
       { `${h > 9 ? h: "0" + h} : ${m > 9 ? m: "0" + m} : ${s > 9 ? s: "0" + s}`}
        </h2>
        </div>
        <br/>
        <button className='btn' onClick={this.startTimer}>Start</button>
        <button className='btn' onClick={this.stopTimer}>Stop</button>
        <button className='btn' onClick={this.resetTimer}>Reset</button>
        <button className='btn' style={{backgroundColor : this.props.isLight ?  "purple" : "white" ,
    color : this.props.isLight ? "white" : "green"
    }} onClick={this.props.changeClicked}>{this.props.isLight ? "purple" : "Green"}</button> 
      </div>
    )
  }
}

export default Timer;
