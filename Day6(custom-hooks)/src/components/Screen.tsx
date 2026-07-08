import { useOnScreen } from "../hooks/useOnScreen"

export const Screen = () => {
    const isVisible=useOnScreen();
    console.log('--->',isVisible);
  return (
    <div>
        <h1>Visible:{isVisible}</h1>
    </div>
  )
}
