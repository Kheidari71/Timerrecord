import React, { useContext, useState, useEffect } from 'react';
import { TimerContext } from './TimerContext';

function Timer(props) {
  const [timer, setTimer] = useState({
    hours: 0,
    minutes: 0,
    second: 0,
    isStarted: false,
  });

  const context = useContext(TimerContext);
  var interval;

  useEffect(() => {
    if (timer.isStarted) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          let newSecond = prevTimer.second + 1;
          let newMinutes = prevTimer.minutes;
          let newHours = prevTimer.hours;

          if (newSecond === 60) {
            newSecond = 0;
            newMinutes++;
          }

          if (newMinutes === 60) {
            newMinutes = 0;
            newHours++;
          }

          return {
            hours: newHours,
            minutes: newMinutes,
            second: newSecond,
            isStarted: prevTimer.isStarted,
          };
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer.isStarted]);

  const startTimer = () => {
    if (!timer.isStarted) {
      setTimer({
        ...timer,
        isStarted: true,
      });
    }
  };

  const stopTimer = () => {
    setTimer({
      ...timer,
      isStarted: false,
    });
  };

  const resetTimer = () => {
    setTimer({
      hours: 0,
      minutes: 0,
      second: 0,
      isStarted: false,
    });
  };

  const handleTimeArray = () => {
    const newTime = `${timer.hours.toString().padStart(2, '0')} : ${timer.minutes.toString().padStart(2, '0')} : ${timer.second.toString().padStart(2, '0')}`;
    context.setTimerArr([...context.timeArr, newTime]);
  };
console.log(props.submitvalue);
  return (
    <>
      <h2 ClassName='timerHover'>{props.submitvalue} Start the timer, Click on the running timer to get a record</h2> 
      <br />
      <div className="timer timerHover">
        <h2 ClassName='timerHover' onClick={handleTimeArray}>{`${timer.hours.toString().padStart(2, '0')} : ${timer.minutes.toString().padStart(2, '0')} : ${timer.second.toString().padStart(2, '0')}`}</h2>
      </div>
      <span className='row'>
        <button className='btn' onClick={startTimer}>Start</button>
        <button className='btn' onClick={stopTimer}>Stop</button>
        <button className='btn' onClick={resetTimer}>Reset</button>
      </span>
    </>
  );
}

export default Timer;
