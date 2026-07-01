import { useState } from "react";

type User = {
  id: number;
  name: string;
};

export default function App() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Satyam" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Aman" },
  ]);

  const removeUser = (id: number) => {
    // const index = users.findIndex((user) => user.id === id);
    // users.splice(index, 1);
    // setUsers(users);
    // setUsers(users.splice(id,1));
    const updatedArr=users.filter((user)=>user.id!==id);
    setUsers(updatedArr)
  };

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          {user.name}
          <button onClick={() => removeUser(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}