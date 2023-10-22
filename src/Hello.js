import React from 'react';
import ReactDOM from 'react-dom';
 class Hello extends React.Component{
     render(){
       return(
        <div className='hi'>
         <h1>Hi Friends</h1>
         <h1>{this.props.title}</h1>
         </div>
       )
     }
 }
export default Hello;