import { useDefault } from "../hooks/useDefault"

export const Default = () => {
// const [state, setState] = useDefault(initalValue, defaultValue);

    const[state, setState]=useDefault(null,0);
    // const[state, setState]=useDefault(1000,0);
  return (
    <div>
        <h1>state:{state}</h1>
    </div>
  )
}
