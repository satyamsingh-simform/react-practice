

import { useEffect, useState } from "react";
import { InfiniteScrollList } from "./InfiniteScrollList"

// interface Post {
//   id: number;
//   title: string;
// }
type Post={
    author:string,
    download_url:string,
    id:string,
}

export const InfiniteScroll = () => {
    const [posts,setPosts]=useState<Post[]>([]);
    const [page,setPage]=useState(1);
    const [loading,setLoading]=useState(false);
    const [hasMore,setHasMore]=useState(true);

    console.log(posts);
    console.log('--->',page);

    useEffect(()=>{
        setLoading(true);
         fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`)
        .then((resp)=>resp.json())
        .then((data)=>{
            if(!data.length){
                setHasMore(false);
                return;
            }
            setPosts((prev)=>[...prev,...data])
        })
        .finally(()=>{
            setLoading(false);
        })
    },[page])

    const loadMore=()=>setPage(prev=>prev+1);


  return (
    <div>
        <InfiniteScrollList<Post>
            items={posts}
            hasMore={hasMore}
            loading={loading}
            loadMore={loadMore}
            renderItem={(post) => <div>
                <img className='h-80 w-50' src={post.download_url} alt="" />
            </div>}
        />
    </div>
  )
}
