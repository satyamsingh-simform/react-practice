/*
const {data, isLoading, error }=useAdvanceAsync({fn: asyncfn // that returns promise,
retry:3,
unwrap: func,  // fucntion that access exact data and returns it. kind of like useSelector's callback
fetchInterval:3000 // in milliseconds for polling
})

// data=> gives success data// isLoading=> returns true whenever promise is in pending state// error=> error if we have any

*/

type UseAdvanceAsyncProps={
    asyncfn:()=>any,
    retry:number,
    unwrap:()=>void,
    fetchInterval:number,
}

export const useAdvanceAsync = ({asyncfn,retry,unwrap,fetchInterval}:UseAdvanceAsyncProps) => {
    

  return ({data, isLoading, error})
}
