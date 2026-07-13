import { useAdvanceAsync } from "../hooks/mentor-hooks/useAdvanceAsync"



export const AdvanceAsync = () => {

    const {data, isLoading, error}=useAdvanceAsync({fetch(''),retry:3,unwrap,fetchInterval:3000})

  return (
    <div>
        
    </div>
  )
}
