import type { ComponentType } from "react"

type WrapperComponentsProps={
    name:string,
    role:string,
}

export const withRole = <P extends object>(Component:ComponentType<P>,allowedRole:string[]) => {
    return function WrapperComponents(props:P & {role:string,}){
        const {role,...rest}=props
        if(!allowedRole.includes(role)){
            return<h1>Access Denied</h1>
        }
        return <Component {...rest as P}/>

    }

}
