import React, {useEffect, useState} from 'react';
 import ReactDOM from 'react-dom';
 import './style.css'

 import Hello from './Hello';
 import Timer from './Timer';
 import ReverseTimer from './ReverseTimer';
 import Timer10Reverse from './Timer10Reverse';
 import TimeList from "./TimeList.jsx";
import { TestContext } from "./testContext";
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
    const [title , setTitle] = useState("Heloo");
    const [isLight , setIsLight] = useState(false);
    const [timeArr , setTimerArr]  = useState(["00 : 05 : 12" , "12 : 05 : 12"]);
useEffect (()=>{
return ()=>{

}
},[isLight])



const changeLight = ()=>{
    setIsLight(!isLight)
}
return(
    <TestContext.Provider value={{timeArr:timeArr, setTimerArr:setTimerArr}}
    >

    <div className="div main" style={{backgroundColor : isLight ?  "green" : "purple"}} className="main">
           <Hello
                onLoad = {title}
             />        
             <Timer
           
            isLight ={isLight}
            changeClicked= {changeLight}
             />
             {/* <ReverseTimer/>
             <Timer10Reverse/> */}
             <TimeList />
         </div> 
         </TestContext.Provider>
)
}

 export default App;