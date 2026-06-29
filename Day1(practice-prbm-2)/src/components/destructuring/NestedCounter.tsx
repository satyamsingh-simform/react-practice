import { useState } from "react"

const dataObj={
  profile: {
    stats: {
      followers: 100,
    },
  },
}

export const NestedCounter = () => {
    const [userDataObj,setUserDataObj]=useState(dataObj);

    function IncreaseFollowerBy1(){
        setUserDataObj({
                ...userDataObj,
            }
        )
    }

  return (
    <div>
        <h1>{userDataObj.profile.stats.followers}</h1>
        <button onClick={IncreaseFollowerBy1}>IncreaseFollower</button>
    </div>
  )
}
