import type { ComponentType } from "react"

// export const withLoading = <P extends object>(Components:ComponentType<P>) => {
//   return function WrapperComponents(props:P & {loading:boolean}){
//     const {loading, ...data}=props;
//     if(loading){
//         return <h1>Loading ...</h1>
//     }
//     return <Components {...data as P}/>
//   }
// }

type LoadingProps={
  user:number[],
}

export const withLoading = <P extends object>(Component:ComponentType<P>) => {
  return function wrapperComponent(props:P & {loading:boolean}){
    const {loading, ...rest}=props
    if(loading){
        return <h1>Loading ...</h1>
    }
    return <Component {...props}/>
  }
  
}

