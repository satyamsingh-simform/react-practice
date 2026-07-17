import { useEffect, useRef } from "react"

type Data={
    author:string,
    download_url:string,
    id:string,
}

type PostProps={
    data:Data[],
    setPage:React.Dispatch<React.SetStateAction<number>>,
}

export const Post = ({data,setPage}:PostProps) => {
    const lastItemRef=useRef<HTMLImageElement|null>(null);

    useEffect(()=>{

        console.log('ref',lastItemRef.current);

        const observer=new IntersectionObserver((param)=>{
            console.log(param[0]);
            if(param[0].isIntersecting){
                setPage(prev=>prev+1);
            }
        },{threshold:1})

        // const lastImg=document.querySelector('.image__post:last-child');
        const lastImg=lastItemRef.current;
        console.log(lastImg);
        if(!lastImg) return;
        observer.observe(lastImg);
        
        return()=>{
            lastImg?? observer.unobserve(lastImg);
            observer.disconnect();
        }

    },[data])

  return (
    <div className="flex flex-col items-center gap-5">
        {
            data?.map((obj,index)=>(
                <img  
                key={obj.id} 
                ref={index===data.length-1?lastItemRef:null}
                className="image__post h-80 w-50 object-cover rounded-2xl" 
                src={obj.download_url} alt="img" 
                />
            ))
        }
    </div>
  )
}
