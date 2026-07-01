import { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      profile: {
        name: "Satyam",
        age: 22,
      },
    },
    {
      id: 2,
      profile: {
        name: "Rahul",
        age: 24,
      },
    },
  ]);

  const updateAge = (id: number) => {
    const user = users.find((u) => u.id === id);
    // if (user) {
    //   user.profile.age++;
    // }
    // setUsers([...users]);

    const updatedAge=users.map((userObj)=>(
        userObj.id===id
        ?{
            ...userObj,
            profile:{
                ...userObj.profile,
                age:userObj.profile.age+1,
            }
        }
        :userObj
    ))
    setUsers(updatedAge);
  };

  return <div>...</div>;
}


/*
const user = {
  id: 1,
  profile: {
    name: "Satyam",
    address: {
      city: "Rajkot",
      state: "Gujarat",
    },
  },
};



const updatedUser = {
  ...user,
  profile: {
    ...user.profile,
    address: {
      ...user.profile.address,
      city: "Ahmedabad",
    },
  },
};

*/