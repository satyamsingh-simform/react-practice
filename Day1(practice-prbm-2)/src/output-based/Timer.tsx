import { useEffect, useState } from "react";

export function Timer() {
  const [count, setCount] = useState(0);

  console.log(count);

  useEffect(() => {
    const id = setInterval(() => setCount(count + 1), 1000);
    console.log(count);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}