import { useKeyBoardShortcut } from "../hooks/mentor-hooks/useKeyBoardShortcut";

function callback(){
    alert('callback run')
    console.log('hi');
}

export const KeyBoardShortcut = () => {

    // hook that fires callback when ctrl+shft+A is pressed.
    useKeyBoardShortcut({  key:"A",  ctrl:true,  shift:true,  onKey:callback });

  return (
    <div>
        
    </div>
  )
}
