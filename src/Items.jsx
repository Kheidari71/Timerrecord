import { useContext } from "react";
import { TimerContext } from "./TimerContext";


const Item = (props)=>{
    
 

    return(
        <div className="dltbtn">
        <br/>

        <h3 style={{color: "white"}} onClick={()=>{
            props.onChecked(props.id) 
        }} >
{props.children}

        </h3>
        </div>
    )
}


export default Item;