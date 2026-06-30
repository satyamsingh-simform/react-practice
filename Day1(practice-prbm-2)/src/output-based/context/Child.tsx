import { createContext, useContext } from "react";
import { Context } from "./Parent";

// export const Context = createContext(110);

// export const Child = () => {
//   console.log("Child");
//   const value = useContext(Context);
//   return <div>Child context:{value}</div>;
// };


export const Child = () => {
  const {theme}=useContext(Context)!;
  
  console.log('child');

  return (
    <div>
      Theme:{theme}
    </div>
  )
}
