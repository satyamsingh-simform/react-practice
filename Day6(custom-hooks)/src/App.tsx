import { useState } from "react"
import { Counter } from "./components/Counter"
import { Cycle } from "./components/Cycle"
import { Default } from "./components/Default"
import { Screen } from "./components/Screen"
import { Memo } from "./components/Memo"
import { KeyBoardShortcut } from "./components/KeyBoardShortcut"

export const App = () => {
  const [toggle,setToggle]=useState(true);
  return (
    <div>
      <Counter/>
      {/* <Default/> */}
      
      {/* {
        toggle?<Screen/>:<Cycle/>
      } */}
      {/* <Memo/> */}
      {/* <Cycle/> */}
      {/* <KeyBoardShortcut/> */}
    </div>
  )
}
