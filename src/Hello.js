import React, { useState } from 'react';
import Timer from './Timer';

function Hello(props) {
 
    var [handleMouseOver , setMouseOver] = useState(false);
  
  function updateMouseOver(){
    setMouseOver(true) 
  }
  function updateMouseOut(){
   setMouseOver(false) 
  }
  // var [handleState , setState ] = useState("What is your name?");
  // var [name , setName] = useState(" ");
  // var [clickedvalue , setState] = useState("");
  
  // function handleChange(event){
  // setName(event.target.value);
  // }
  
  // function handleClicked(event){
  //   setState(name);
  // }
  var [name , setname] = useState ("");
  
  
  function handleChange (event){
  setname((event.target.value));
  }
  function handleClicked(e) {
    const newValue = name + "!";
    props.setValue(newValue);
    console.log("New value:", newValue); // Add this line to check the new value
    e.preventDefault();
  }
  
  return (
    <>
     <form onSubmit={handleClicked}>
      <h1>Heloo {props.submitvalue}</h1>
      <br/>
      <input className='helloInput' onChange={handleChange} value={name}  id="input" type="text" placeholder="Tell us your name?" />
      {/* <button  style={{backgroundColor : handleMouseOver ? "black" : "white"}}  onMouseOver={updateMouseOver} onMouseOut={updateMouseOut}>Submit</button> */}
      <button style={{backgroundColor :handleMouseOver? "Orange" : "white" ,color :handleMouseOver? "white" : "Orange",border:"1px Orange solid" , borderRadius:"5px", width:"70px" , height:"34px"}} onMouseOver={updateMouseOver} onMouseOut={updateMouseOut}>submit</button>
      </form>
    </>
  );
}

export default Hello;
