import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((count) => count + 1);
  }
  function decreaseCount() {
    setCount((count) => count - 1);
  }
  function resetCount() {
    setCount((count) => count - count);
  }
  return { count, increaseCount, decreaseCount, resetCount };
}
