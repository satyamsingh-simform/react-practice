import type { ComponentType } from "react";
import type { UserCardProps } from "../components/user-card/UserCard";

export type USER = {
  id: number,
  name: string,
  email: string,
};

export const CURRENT_USER = {
  id: 1,
  name: "Satyam",
  email: "satyam@gmail.com",
};

export const withCurrentUser = <P extends UserCardProps>(Component:ComponentType<P &USER>) => {
  return function wrappedComponent(props:Omit<UserCardProps, keyof USER>){
    return <Component {...props as P} {...CURRENT_USER}/>
  }
}
