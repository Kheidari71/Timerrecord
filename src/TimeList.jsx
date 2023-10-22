
import { useContext } from "react";
import Items from  "./Items";
import { TimerContext } from "./TimerContext";


const TimeList = ()=>{
  const context = useContext(TimerContext)

  function deleteItem(id) {
    context.setTimerArr(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return(
    
    <div>
   {context.timeArr.map((c, index)=>{
    return( <Items onChecked={deleteItem} id={index}  key={index}>  {c} <button style={{backgroundColor : "Orange" ,color : "white" ,border:"1px Orange solid" , borderRadius:"5px", width:"50px" , height:"20px"}} >Delete</button></Items>)
   
   })}
  
 
  
    </div>
  )  
}

export default TimeList;