// export const Dashboard = ({ name }) => {
//   return <h2>Welcome {name}</h2>;
// };

export const Dashboard = ({name}:{name:string}) => {
  return (
    <div>
        <h1>welcome:{name}</h1>
    </div>
  )
}
