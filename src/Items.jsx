import { useContext } from "react";
import { TestContext } from "./testContext";


const Item = (props)=>{
    
 

    return(
        <div onClick={()=>{
            props.onChecked(props.id)
        }}>
{props.children}
        </div>
    )
}


export default Item;