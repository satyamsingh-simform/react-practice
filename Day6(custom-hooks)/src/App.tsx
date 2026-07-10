import { useState } from "react"
import { UpdateCountState } from "./components/UpdateCountState"
import { Cycle } from "./components/Cycle"
import { Default } from "./components/Default"
import { Screen } from "./components/Screen"
import { Memo } from "./components/Memo"
import { KeyBoardShortcut } from "./components/KeyBoardShortcut"
import { Input } from "./components/Input"

export const App = () => {
  const [toggle,setToggle]=useState(true);
  return (
    <div className="h-1000 border">
      {/* <UpdateCountState/> */}
      {/* <Default/> */}
      
      {/* {
        toggle?<Screen/>:<Cycle/>
      } */}
      <Memo/>
      {/* <Cycle/> */}
      {/* <KeyBoardShortcut/> */}

      {/* <Screen/> */}

      {/* <Input/> */}
    </div>
  )
}
