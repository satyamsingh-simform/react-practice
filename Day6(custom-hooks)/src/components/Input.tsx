import type { SubmitEvent } from "react";
import { useInputControl } from "../hooks/mentor-hooks/useInputControl";

//  const {value,onChange,onBlur,isDirty,isTouched, isDifferent, reset} = useInputControl('Oliver');

export const Input = () => {
  const { value, isTouched, isDirty, isDifferent, onChange, reset, onBlur } =
    useInputControl("Oliver");

  //   function handleBlur(){
  //     console.log('focuse looses');
  //   }

  function submit(e:SubmitEvent<HTMLFormElement>){
    e.preventDefault();
    console.log('--->',value);
  }

  return (
    <div>
      <form onSubmit={(e)=>submit(e)}>
        <label htmlFor="name">Name:</label>
        <input
          className="border"
          id="name"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
        />
        <p>Touched: {isTouched.toString()}</p>
        <p>Dirty: {isDirty.toString()}</p>
        <p>Different: {isDifferent.toString()}</p>
        <button type="submit" disabled={!isDifferent}>
          {" "}
          Submit{" "}
        </button>
        <br />
        <button type="button" onClick={reset}>
          {" "}
          Reset{" "}
        </button>
      </form>
    </div>
  );
};
