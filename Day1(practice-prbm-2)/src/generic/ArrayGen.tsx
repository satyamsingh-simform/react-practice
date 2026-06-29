import type { ReactNode } from "react"

type ArrayGenProps<T>={
    arr:T[],
}

export const ArrayGen =<T extends ReactNode,>({arr}:ArrayGenProps<T>) => {
  return (
    <div>
        {arr[0]}
    </div>
  )
}
