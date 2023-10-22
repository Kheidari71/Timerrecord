
import { useContext } from "react";
import Items from  "./Items";
import { TestContext } from "./testContext";


const TimeList = ()=>{
  const context = useContext(TestContext)

  function deleteItem(id) {
    context.setTimerArr(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return(
    
    <div className="main-timelist">
   {context.timeArr.map((c, index)=>{
    return( <Items onChecked={deleteItem} id={index}  key={index}>  {c}</Items>)
   
   })}
  
 
  
    </div>
  )  
}

export default TimeList;