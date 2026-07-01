import { useEffect, useMemo, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  //memoize the obj or move it inside the effect with empty dependency
//   const options = {
//     headers: {},
//   };

  const options=useMemo(()=>{
    headers: {}
  },[])

  useEffect(() => {
    console.log("Fetching...");
  }, [options]);

  return (
    <button onClick={() => setCount((c) => c + 1)}>
      {count}
    </button>
  );
}