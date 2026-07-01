import { useState } from "react";

export default function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);

  const reverseNumbers = () => {
    // numbers.reverse();
    // setNumbers(numbers.reverse());
    setNumbers((prevArr)=>[...prevArr].reverse());
  };

  return (
    <>
      <button onClick={reverseNumbers}>
        Reverse
      </button>

      {numbers.map((num) => (
        <p key={num}>{num}</p>
      ))}
    </>
  );
}