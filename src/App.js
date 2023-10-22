import React, {useEffect, useState} from 'react';
 import ReactDOM from 'react-dom';
 import './style.css'
import Items from './Items';
 import Hello from './Hello';
 import Timer from './Timer';
 import ReverseTimer from './ReverseTimer';
 import Timer10Reverse from './Timer10Reverse';
 import TimeList from "./TimeList.jsx";
import { TimerContext } from "./TimerContext";
//  class App extends React.Component {
//     constructor(){
//         super()
//         this.state ={
//             title : "Hello "
//         }
//     }

//     changeTitle = ()=>{
// this.setState({
// title: "Hello, Welcome to my Portfolio website"
// })
//     }
//      render(){
//          return (
//          <div className="main">
//              <Hi
//                 onLoad = {this.state.title}
//              />        
//              <Timer/>
//              <ReverseTimer/>
//              <Timer10Reverse
//                 changeClicked= {this.changeTitle}
//              />
//          </div>
//          ) 
//      }
//  }
const App = ()=>{
  const [submitvalue, setValue] = useState("");
    const [title , setTitle] = useState("Heloo");
    const [isLight , setIsLight] = useState(false);
    const [timeArr , setTimerArr]  = useState([]);

    
useEffect (()=>{
return ()=>{

}
},[isLight])



const changeLight = ()=>{
    setIsLight(!isLight)
}
return(
    <TimerContext.Provider value={{timeArr:timeArr, setTimerArr:setTimerArr}}
    >

    <div className="div main" style={{backgroundColor : "navy"}} className="main">
            <Hello submitvalue={submitvalue} setValue={setValue} onLoad = {title}/>
               <br/> 
                   
             <Timer
           submitvalue={submitvalue}
            isLight ={isLight}
            changeClicked= {changeLight}
             />
             <br/>
             {/* <ReverseTimer/>
             <Timer10Reverse/> */}
             <TimeList />
             <Items />
         </div> 
         </TimerContext.Provider>
)
}

 export default App;




 
