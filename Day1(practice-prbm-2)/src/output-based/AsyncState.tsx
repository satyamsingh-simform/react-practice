import { useState } from "react";

export default function AsyncState() {
  const [count, setCount] = useState(0);

  console.log("Render:", count);

  return (
    <button
      onClick={() => {
        setCount(count + 1);

        Promise.resolve().then(()=>{
            setCount(prev=>prev + 1);
        })
      }}
    >
      Count:{count}
    </button>
  );
}