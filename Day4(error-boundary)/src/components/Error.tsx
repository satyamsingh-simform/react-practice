type ErrorProps={
    error:Error|null,
    retry:()=>void
}

export const Error = ({error,retry}:ErrorProps) => {
    if(!error){
        return ;
    }
  return (
    <div>
        <h1>something went wrong</h1>
        <p>{error.message}</p>
        <button className="border" onClick={retry}>try Again</button>
    </div>
  )
}
