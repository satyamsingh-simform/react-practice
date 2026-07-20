// export const withRole = (Component, allowedRoles:string) => {
//   return function WrappedComponent(props) {
//     const { role, ...rest } = props;

import type { ComponentType } from "react"

//     if (!allowedRoles.includes(role)) {
//       return <h2>Access Denied</h2>;
//     }

//     return <Component {...rest} />;
//   };
// };

type WrapperComponentsProps={
    name:string,
    role:string,
}

export const withRole = <P extends object>(Component:ComponentType<P>,allowedRole:string[]) => {
    return function WrapperComponents(props:P & {
    role:string,
}){
        const {role,...rest}=props
        if(!allowedRole.includes(role)){
            return<h1>Access Denied</h1>
        }
        return <Component {...rest as P}/>

    }

}
