import { useState } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

export default function IncreaseAge() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Satyam", age: 22 },
    { id: 2, name: "Rahul", age: 24 },
  ]);

  const increaseAge = (id: number) => {
    // const userAge = users.find((u) => u.id === id)!;
    // if (user) {
    //   user.age++;
    // }
    // setUsers(users);

    const IncreasedAge=users.map((user)=>(
        user.id===id
        ?
        {
            ...user,
            age:user.age+1,
        }
        :user
    ))

    setUsers(IncreasedAge);
  };

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.name} - {user.age}
          </p>

          <button onClick={() => increaseAge(user.id)}>Increase Age</button>
        </div>
      ))}
    </>
  );
}
