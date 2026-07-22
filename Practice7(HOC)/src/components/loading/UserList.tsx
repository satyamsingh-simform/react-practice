

export const UserList = ({user}:{user:number[]}) => {
  return (
    <div>
        {
            user.map((val)=>(
                <div key={val}>{val}</div>
            ))
        }
    </div>
  )
}
