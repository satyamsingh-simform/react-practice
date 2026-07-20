// import { Dashboard } from "./components/Dashboard";
// import { withRole } from "./components/withRole";

import { Dashboard } from "./components/Dashboard"
import { Fetch } from "./components/Fetch"
import { UserFetch } from "./components/UserFetch"
import { withLoading } from "./hoc/withLoading"
import { withRole } from "./hoc/withRole"

export const App = () => {

  // const AdminDashboard=withRole(Dashboard,['admin']);
  const FetchLoading=withLoading(Fetch)

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

    <div>
      <UserFetch/>
    </div>
  )
}
