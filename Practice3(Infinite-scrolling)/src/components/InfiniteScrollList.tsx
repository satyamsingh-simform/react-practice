import { useEffect } from "react"

type InfiniteScrollList<T>={
    items:T[],
    hasMore:boolean,
    loading:boolean,
    loadMore:()=>void,
    renderItem:(post:T)=>React.ReactNode,
}

export const InfiniteScrollList = <T,>({items,hasMore,loading,loadMore,renderItem}:InfiniteScrollList<T>) => {
  
    useEffect(()=>{
        const observer=new IntersectionObserver((params)=>{
            if(loading) return
            if(params[0].isIntersecting){
                observer.unobserve(lastItem!)
                loadMore();
            }
        },{threshold:1})

        const lastItem=document.querySelector('.last-item:last-child');

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
                <div key={index} className="last-item h-100 border">
                    {renderItem(item)}
                </div>
            ))
        }
    </div>
  )
}
