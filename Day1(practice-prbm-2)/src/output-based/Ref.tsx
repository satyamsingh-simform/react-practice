import { useRef } from "react";

export default function Ref() {
  const countRef = useRef(0);

  console.log("Render");

  return (
    <>
      <h2>Count: {countRef.current}</h2>

      <button
        onClick={() => {
          countRef.current++;
          console.log("Ref:", countRef.current);
        }}
      >
        Increment Ref
      </button>
    </>
  );
}