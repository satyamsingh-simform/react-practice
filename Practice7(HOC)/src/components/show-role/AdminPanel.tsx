import { withShowRole } from "../../hoc/withShowRole";

type AdminPanelProps={
    role:string,
}

export const AdminPanel = ({ role }: AdminPanelProps) => {
  return <h1>Admin panel: {role}</h1>;
};

export const GuardedPanel = withShowRole(AdminPanel, "admi");
