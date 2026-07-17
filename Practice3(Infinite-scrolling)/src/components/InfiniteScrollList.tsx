import { useEffect, useRef } from "react"

type InfiniteScrollList<T>={
    items:T[],
    hasMore:boolean,
    loading:boolean,
    loadMore:()=>void,
    renderItem:(post:T)=>React.ReactNode,
}

export const InfiniteScrollList = <T,>({items,loading,hasMore,loadMore,renderItem}:InfiniteScrollList<T>) => {
    const lastImageRef=useRef<HTMLDivElement>(null);
    useEffect(()=>{
        const observer=new IntersectionObserver((params)=>{
            if(loading) return
            if(hasMore && params[0].isIntersecting){
                observer.unobserve(lastItem!)
                loadMore();
            }
        },{threshold:1})

        // const lastItem=document.querySelector('.last-item:last-child');
        const lastItem=lastImageRef.current;
        console.log('-->',lastItem);

        if(!lastItem) return;
        observer.observe(lastItem);

        return ()=>{
            observer.disconnect();
        }

    },[items])
  
return (
    <div>
        {
            items.map((item,index)=>(
                <div key={index} ref={index===items.length-1?lastImageRef:null} className="h-80 w-50 border m-5">
                    {renderItem(item)}
                </div>
            ))
        }
        {
            loading?<div className="text-3xl mb-10">loading...</div>:''
        }
        {
            !hasMore?<div>NO MORE POSTS</div>:''
        }
    </div>
  )
}
