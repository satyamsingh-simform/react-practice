// import { withPermission } from "../../hoc/withPermission";

// export type DeleteButtonProps = {
//   permission: string;
// };

// const DeleteButton = ({ permission }: DeleteButtonProps) => {
//   return <button>Delete ({permission})</button>;
// };

// export const ProtectedDeleteButton=withPermission(DeleteButton,"DELETE_USER");

import { withPermission } from "../../hoc/withPermission";

export type DeleteButtonProps = {
  permission: string;
};

export const PERMISSIONS = [
  "VIEW_USER",
  "EDIT_USER",
  "CREATE_USER",
];

const DeleteButton = ({ permission }: DeleteButtonProps) => {
  return <button>Delete ({permission})</button>;
};

export const ProtectedDeleteButton=withPermission(DeleteButton, PERMISSIONS);