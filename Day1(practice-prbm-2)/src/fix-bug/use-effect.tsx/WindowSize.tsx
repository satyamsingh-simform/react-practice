import React, { useState, useEffect } from "react";

/*Why
The handleResize function is created only once, during the first render, because the dependency array is empty ([]).
At that time, it closes over (captures) the initial value of width.
So whenever the resize event occurs, handleResize always reads that old captured value, not the latest state.
As a result:
setWidth(window.innerWidth) correctly updates the UI.
But console.log(width) always prints the initial width, because the event handler is using a stale closure.

*/


export default function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      console.log("Width:", width);
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, [width]);

  return <h1>{width}</h1>;
}