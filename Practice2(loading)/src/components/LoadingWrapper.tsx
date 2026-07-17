type LoadingWrapperProps={
  loading:boolean,
  children:React.ReactNode
}

export const LoadingWrapper = ({loading,children}:LoadingWrapperProps) => {
  if(loading){
    return <div>Loading...</div>
  }

  return (
    <div>
      {children}
    </div>
  )
}



