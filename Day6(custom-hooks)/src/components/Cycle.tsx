import { useCycle } from "../hooks/mentor-hooks/useCycle";

const arr=['low', 'medium', 'high'];

export const Cycle = () => {
const [mode, cycle] = useCycle(arr);
  return (
    <div>
        <h1>Mode:{mode}</h1>
        <button onClick={cycle}>changeCycle</button>
    </div>
  )
}
