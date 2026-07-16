import { useEffect, useState } from "react"
import { Post } from "./Post"

type Data={
    author:string,
    download_url:string,
    id:string,
}

export const InfiniteScroll = () => {
    const [data, setData]=useState<Data[]>([]);
    const [page,setPage]=useState(1);

    console.log('-->',data);
    
    useEffect(()=>{
         fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`)
        .then((resp)=>resp.json())
        .then((data)=>setData((prev)=>[...prev,...data]))
    },[page])


  return (
    <div>
        <Post data={data} setPage={setPage}/>
    </div>
  )
}



