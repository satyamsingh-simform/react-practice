import { useEffect, useState } from "react"
import { withLoading } from "../../hoc/withLoading";
import { UserList } from "./UserList";

const UserListWithLoading=withLoading(UserList);

export const UserFetch = () => {
    const [user,setUser]=useState<number[]>([1,2,3,4,5,6]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setUser(prev=>{
                setLoading(false);
                return [...prev,...prev.map((val)=>val*10)]
            })
        },1000)
    },[])

  return (
    <div>
        {/* <UserList user={user}/> */}
        <UserListWithLoading
            user={user} loading={loading}
        />
    </div>
  )
}
