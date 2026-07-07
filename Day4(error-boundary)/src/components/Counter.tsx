import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  if (Math.random() < 0.1) {
    throw new Error("error");
  }

  return (
    <div>
      <h1>COUNT:{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
    </div>
  );
};
