import React, { type ReactNode } from "react";

/*Why error boundary is class based components
    -error boundary depends on multiple lifecycle methods, that only exists in React.Component class
*/

type StateType={
    hasError:boolean,
    error:Error|null,
}

type FallbackProps={
    error:Error|null,
    retry:()=>void
}

type ErrorBoundaryProps={
    fallback:React.ComponentType<FallbackProps>,
    children:ReactNode,
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps,StateType>{
    state:StateType={
        hasError:false,
        error:null,
    }

    retry=()=>{
        this.setState({
            hasError:false,
            error:null,
        })
    }

    static getDerivedStateFromError(error:Error|null):StateType{
        return{
            hasError:true,
            error:error,
        }
    }

    render(){
        const {hasError,error} =this.state;
        const {fallback:Fallback,children}=this.props;

        if(hasError){
            return<Fallback error={error} retry={this.retry}/>
        }

        return(
            <div>
                {children}
            </div>
        )
        
    }
}

export default ErrorBoundary; 
