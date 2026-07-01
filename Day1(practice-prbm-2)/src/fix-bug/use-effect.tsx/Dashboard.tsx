import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  active: boolean;
};

function UserCard({ user, onSelect }: { user: User; onSelect: () => void }) {
  return <div onClick={onSelect}>{user.name}</div>;
}

export default function Dashboard({ userId }: { userId: string }) {
  const [users, setUsers] = useState<User[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((r) => r.json())
    //   .then(setUsers);
      .then((r)=>setUsers(r));
  }, []);

  const activeUsers = users.filter((u) => u.active);

  return (
    <>
      {activeUsers.map((user) => (
        <UserCard
          key={Math.random()}
          user={user}
          onSelect={() => setSelected(user.id)}
        />
      ))}
    </>
  );
}
