import { useState } from "react"
import { UpdateCountState } from "./components/UpdateCountState"
import { Cycle } from "./components/Cycle"
import { Default } from "./components/Default"
import { Screen } from "./components/Screen"
import { Memo } from "./components/Memo"
import { KeyBoardShortcut } from "./components/KeyBoardShortcut"
import { Input } from "./components/Input"
import { Pagination } from "./components/Pagination"
import { PrevState } from "./components/PrevState"
import { AdvanceAsync } from "./components/AdvanceAsync"
// import { Accordian } from "./components/Accordian"

export const App = () => {
  const [toggle,setToggle]=useState(true);
  return (
    <div className="h-1000 border">
      {/* <UpdateCountState/> */}
      {/* <Default/> */}
      
      {/* {
        toggle?<Screen/>:<Cycle/>
      } */}
      {/* <Memo/> */}
      {/* <Cycle/> */}
      {/* <KeyBoardShortcut/> */}

      {/* <Screen/> */}

      {/* <Input/> */}

      {/* <Pagination/> */}
      {/* <PrevState/> */}

      {/* <Accordian/> */}

      <AdvanceAsync/>
    </div>
  )
}
