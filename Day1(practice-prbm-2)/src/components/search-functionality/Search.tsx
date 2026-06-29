import { useRef, useState } from "react"
import { fruits } from "../../utils/data"

export default function Search(){
    const [input,setInput]=useState('');
    const [searchFru,setSearchFru]=useState<string[]>([]);
    const timerId=useRef<number>(0)

    function handleSearch(value:string){
        if(value.trim()===''){
            return setSearchFru([]);
        } 
        console.log(value);
        const searchArr=fruits.filter((fruit)=>fruit.toLowerCase().includes(value.toLowerCase()));
        console.log('--->',searchArr);
        setSearchFru(searchArr);
    }
    function debounce(callback:()=>void,timer:number){
        clearTimeout(timerId.current);
        timerId.current=setTimeout(()=>{
            callback();
        },timer)
    }

    return(
        <>
        <input type='search' placeholder="search fruit here" 
            className="border m-5"
            value={input}
            onChange={(e)=>{
                setInput(e.target.value)
                debounce(()=>{
                    handleSearch(e.target.value)
                },500)
            }}
        />
        <div className="mx-5">
            { searchFru.length
                ?
                searchFru.map((fruit)=>(
                    <div key={fruit}>
                        <p
                            onClick={()=>setInput(fruit)}
                        >
                        {fruit}</p>

                    </div>
                    
                ))
                :
                <p></p>
            }
        </div>
        </>
    )
}