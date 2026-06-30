import { createContext, useState } from "react"
import { Child } from "./Child";
// import { Child, Context } from "./Child"

// export const Parent = () => {
//     const [count,setcount]=useState(10);
//     console.log('parent');
    
//   return (
//         <Context.Provider value={count}>
//             <Child/>
//             <button onClick={()=>setcount(prevC=>prevC+1)}>Increase:{count}</button>
//         </Context.Provider>
//   )
// }

type VariableType={
  count:number,
  theme:string,
}

export const Context=createContext<VariableType|null>(null);

export const Parent = () => {
  const [count,setCount]=useState(0);
  const [theme,setTheme]=useState('dark');

  console.log('parent');
  
  return (
    <Context.Provider value={{count,theme}}>
      <Child/>
      <button onClick={()=>setCount(prev=>prev+1)}>IncreaseCount{count}</button>
    </Context.Provider>
  )
}
