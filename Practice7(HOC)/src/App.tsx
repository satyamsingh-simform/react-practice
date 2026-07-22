// import { Dashboard } from "./components/Dashboard";
// import { withRole } from "./components/withRole";

import { UserFetch } from "./components/loading/UserFetch"
import { Dashboard } from "./components/role/Dashboard"
import { withLoading } from "./hoc/withLoading"
import { withRole } from "./hoc/withRole"
import {GuardedPanel} from './components/show-role/AdminPanel'
import { Fetch } from "./components/loading/Fetch"
import { ProtectedDeleteButton } from "./components/delete-user/DeleteButton"
import { CurrentUserCard } from "./components/user-card/UserCard"

export const ROLES = ["admin", "editor", "viewer"];


export const App = () => {

  const AdminDashboard=withRole(Dashboard,['admin']);
  // const FetchLoading=withLoading(Fetch)

  return (
    // <div>
    //   <AdminDashboard
    //     name='Satya'
    //     role='admin'
    //   />
    //   <AdminDashboard
    //     name='Satya'
    //     role='user'
    //   />
    // </div>


    // <div>
    //   <FetchLoading loading={true} data={'data fetched'}/>
    //   <FetchLoading loading={false} data={'data fetched'}/>
    // </div>

    // <div>
    //   <UserFetch/>
    // </div>

    //mistake i made by not understanding questions
    // <div>
    //   <GuardedPanel
    //   />
    // </div>

    // <div>
    //   <GuardedPanel role={"admin"}/>
    // </div>

    // <div>
    //   <ProtectedDeleteButton permission="DELETE_USER" />

    //   <ProtectedDeleteButton permission="VIEW_USER" />
    // </div>

    <div>
      <CurrentUserCard role={"admin"}/>
    </div>

  )
}
