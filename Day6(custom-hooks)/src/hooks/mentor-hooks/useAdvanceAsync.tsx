/*
const {data, isLoading, error }=useAdvanceAsync({fn: asyncfn // that returns promise,
retry:3,
unwrap: func,  // fucntion that access exact data and returns it. kind of like useSelector's callback
fetchInterval:3000 // in milliseconds for polling
})

// data=> gives success data// isLoading=> returns true whenever promise is in pending state// error=> error if we have any

*/

import { useEffect, useRef, useState } from "react";

// export type Data = {
//   id: number;
//   name: string;
//   username: string;
// };

type UseAdvanceAsyncProps<T> = {
  asyncfn: () => Promise<Response>;
  retry: number;
  unwrap: (result: T[]) => T[];
  fetchInterval: number;
};

export const useAdvanceAsync = <T,>({ asyncfn, retry, unwrap, fetchInterval}: UseAdvanceAsyncProps<T>) => {
  const [data, setData] = useState<T[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null | unknown>(null);
  const timerRef = useRef(0);
  const count=useRef(0);

  useEffect(() => {
    async function fetchData(){
      
      try {
        setIsLoading(true);
        const resp = await asyncfn();

        if (!resp.ok) {
          throw new Error("could not fetched data");
        }

        const data:T[] = await resp.json();
        // setData(data);
        setData(unwrap(data));

        if (resp.ok) {
          count.current=0;
          clearInterval(timerRef.current)
          timerRef.current = setInterval(() => {
            console.log("pooling");
            fetchData();
          }, fetchInterval);
        }
      } 

      catch (err) {
        if (count.current < retry) {
          console.log("retry-->");
          fetchData();
          count.current++;
          return;
        }
        setError(err);
        setIsLoading(false);
      } 
      
      finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return { data, isLoading, error };
};
