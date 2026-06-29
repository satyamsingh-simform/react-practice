import { useState } from "react";

export const FruitCard = ({fruit}) => {
    const [check,setCheck]=useState(false);

    function handleCheckToggle(){
        setCheck(prev=>!prev);
    }
    
  return (
    <div>
        <button onClick={handleCheckToggle}>
            <span >{fruit }{check?"[x]":"[ ]"}</span>
        </button>
    </div>
  )
}
