import { useMemo, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Satyam");

  console.log("App Render");

  const doubled = useMemo(() => {
    console.log("Calculating doubled");
    return count * 2;
  }, [count]);

  return (
    <>
      <h2>Count: {count}</h2>
      <h2>Doubled: {doubled}</h2>
      <h2>Name: {name}</h2>

      <button onClick={() => setCount(c => c + 1)}>
        Increment Count
      </button>

      <button onClick={() => setName("Raj")}>
        Change Name
      </button>
    </>
  );
}