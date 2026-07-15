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
  asyncfn: () => Promise<T>;
  retry: number;
  unwrap: (result: T) => T;
  fetchInterval: number;
};

export const useAdvanceAsync = <T,>({ asyncfn, retry, unwrap, fetchInterval}: UseAdvanceAsyncProps<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null | unknown>(null);
  const timerRef = useRef(0);
  const count=useRef(0);

  useEffect(() => {
    async function fetchData(){
      setIsLoading(true);
      setError(null);

      try {
        const result:T = await asyncfn();

        setData(unwrap(result));

        count.current = 0;

        if (!timerRef.current && fetchInterval) {
          timerRef.current = window.setInterval(fetchData, fetchInterval);
        }
      } 

      catch (err) {
        if (count.current < retry) {
          console.log("retry-->");
          // fetchData();
          count.current++;
          return fetchData();
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
