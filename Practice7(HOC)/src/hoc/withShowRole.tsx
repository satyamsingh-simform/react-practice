/*
import type { ComponentType } from "react"

export const ROLES = ["admin", "editor", "viewer"];

export const withShowRole = <P extends object>(Component:ComponentType<P>,prop:string) => {
  return function WrapperComponent(){

    if(!ROLES.includes(prop)){
        return <h1>Access denied</h1>
    }
    return <Component role={prop as P}/>
  }
}
  */

import type { ComponentType } from "react";

// type RoleProps={
//     role:string,
// }

export const withShowRole = <P extends object>(Component:ComponentType<P>, args:string) => {
    console.log('args:',args);
  
    return function wrappedComponent(props:P &{role:string}){
        const {role}=props;
        console.log('role:',role);
        if(role!==args) {
            return <h1>Access Denied</h1>
        }
        return <Component {...props}/>
  }
}

