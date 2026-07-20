import type { ComponentType } from "react"

// type WrapperComponentsProps={
//     loading:boolean,
//     data:string,
// }

export const withLoading = <P extends object>(Components:ComponentType<P>) => {
  return function WrapperComponents(props:P & {loading:boolean}){
    const {loading, ...data}=props;
    if(loading){
        return <h1>Loading ...</h1>
    }
    return <Components {...data as P}/>
  }
}
