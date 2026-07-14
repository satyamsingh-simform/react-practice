import { useEffect, useRef, useState } from "react"
import { fruits } from "../utils/data";
import { useClickOutsideToClose } from "../hooks/useClickOutsideToClose";

export const SearchWithDebounce = () => {
    const [searchOption,setSearchOption]=useState<string[]>(['']);
    const [selected,setSelected]=useState('');
    const refTimer=useRef(0);
    // const [dropdownOpen,setDropdownOpen]=useState(false);
    const [dropdownOpen,setDropdownOpen]=useClickOutsideToClose(false);

    function search(text:string){
        if(!text){
            console.log('hello');
            setSearchOption([]);
            return;
        }
        const filteredArr=fruits.filter((fruit)=>fruit.toLowerCase().includes(text.toLowerCase()));
        setSearchOption(filteredArr);
    }

    function debounced(callback:()=>void,timer:number){
        clearInterval(refTimer.current);
        refTimer.current=setTimeout(()=>{
            console.log('callback called');
            callback()
        },timer)
    }

    // useEffect(()=>{
    //     function handleClick(e:PointerEvent){
    //         // console.log(e.currentTarget===window);
    //         console.log((e.target as HTMLElement).tagName);
    //         if((e.target as HTMLElement).tagName==="HTML"){
    //             setDropdownOpen(false);
    //         }
    //     }

    //     addEventListener('click',handleClick);

    //     return()=>{
    //         removeEventListener('click',handleClick);
    //     }
    // },[])

  return (
    <>
        <input type="text" placeholder="enter fruit"
            className="border"
            onChange={(e)=>{
                setSelected(e.target.value)
                setDropdownOpen(true);
                debounced(()=>{
                    search(e.target.value)
                },500)
            }}
            value={selected}
        />

        <div className="mt-5 w-50 bg-amber-50">
            {
                dropdownOpen?
                (searchOption?.map((fruit,index)=>(
                    <div className="border w-50" key={index}
                    onClick={()=>{
                        setSelected(fruit);
                        setDropdownOpen(false);
                    }}
                    >{fruit}
                    </div>
                )))
                :''
            }
        </div>

    </>
  )
}
