import { withCurrentUser } from "../../hoc/withCurrentUser";

export type UserCardProps = {
  id: number;
  name: string;
  email: string;
  role:string,
};

const UserCard = ({ id, name, email,role }: UserCardProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{role}</p>
      <small>User Id: {id}</small>
    </div>
  );
};

export const CurrentUserCard = withCurrentUser(UserCard);