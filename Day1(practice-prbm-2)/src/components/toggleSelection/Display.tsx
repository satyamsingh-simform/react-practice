import useToggleSelection from "./useToggleSelection";

const fruits=["Apple","Mango","Banana","Orange"];

export const Display =()=>{
    const {handleSelected,selected}=useToggleSelection();
    console.log(selected);
    
  return (
    <div>
        {
            fruits.map((fruit,index)=>(
                <p key={`${fruit}-${index}`} onClick={()=>handleSelected(fruit)}>
                    <span>{fruit}</span>
                    <span>
                        {
                            selected.includes(fruit)?'[x]':'[]'
                        }
                    </span>
                </p>
            ))
        }
    </div>
  )
}
