// import { type ComponentType } from 'react'

import type { ComponentType } from "react"

// export const withPermission = <P extends object>(Component:ComponentType<P>,args:string) => {
//   return function componentWrapper(props:P & {permission:string}){
//     const {permission}=props;
//     if(permission!==args){
//         return <h1>Access Denied</h1>
//     }
//     return <Component {...props}/>
//   }
// }


export const withPermission = <P extends object>(Component:ComponentType<P>, role:string[]) => {
  return function wrapperComponent(props:P &{permission:string}){
    console.log('-->',props.permission);
    const {permission}=props
    console.log(permission);
    
    if(!role.includes(permission)){
        return <h1>Access denied</h1>
    }
    return <Component {...props}/>
  }
}
