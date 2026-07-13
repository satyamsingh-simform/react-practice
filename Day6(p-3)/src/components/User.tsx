import { useEffect } from "react";
import { useType } from "../hooks/useType"
import { fetchUser } from "../features/userSlice";

export const User = () => {

    const {useAppSelector,useAppDispatch}=useType();
    const {loading,error,user}=useAppSelector(store=>store.user);
    const dispatch=useAppDispatch();

    useEffect(()=>{
        dispatch(fetchUser());
    },[])

    console.log(loading);
    console.log(error);
    console.log(user);
    

    if(loading){
        return <h1>Loading ...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

    

  return (
    <div>
        {
            user.map((userObj)=>(
                <div key={userObj.id}>
                   <p>{userObj.name}</p> 
                   <p>{userObj.username}</p> 
                   <p>{userObj.email}</p> 
                </div>
            ))
        }
    </div>
  )
}
