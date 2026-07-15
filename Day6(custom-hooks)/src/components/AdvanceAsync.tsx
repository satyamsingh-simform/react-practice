import {
  useAdvanceAsync,
  // type Data,
} from "../hooks/mentor-hooks/useAdvanceAsync";

export type Data = {
  id: number;
  name: string;
  username: string;
};

export const AdvanceAsync = () => {
  const { data, isLoading, error } = useAdvanceAsync<Data>({
    asyncfn: () => fetch("https://jsonplaceholder.typicode.com/user"),
    retry: 3,
    unwrap: (resp: Data) => resp,
    fetchInterval: 3000,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error occured</h1>;
  }

  console.log(data);
  console.log(isLoading);
  console.log(error);

  return (
    <div>
      {data?.map((dataObj) => (
        <div key={dataObj.id}>name:{dataObj.name}</div>
      ))}
    </div>
  );
};
