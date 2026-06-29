import type { UserDetailsTable } from "../App"

type DataTableGProps<T>={
    // presentableColumns:string[],
    // data:UserDetailsTable[],
    presentableColumns:(keyof T)[],
    data:T[],
}

export const DataTableG =<T,>({presentableColumns,data}:DataTableGProps<T>) => {
    console.log(presentableColumns,data);
    
  return (
    <div>DataTableG</div>
  )
}
