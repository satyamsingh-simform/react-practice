import { useEffect, useRef, useState } from "react"

export const fruits = [
  "Apple",
  "Mango",
  "Banana",
  "Orange",
  "Pineapple",
  "Grapes",
  "Watermelon",
  "Papaya",
  "Guava",
  "Strawberry"
];

export const AutoComplete = () => {
    const [filterFruit,setFilterFruit]=useState<string[]>([]);
    const [input,setInput]=useState<string>('');
    const timerRef=useRef(0);

    // useEffect(()=>{
    //     async function fetchData(){
    //         const proxyServer = "https://cors-anywhere.herokuapp.com/";
    //         const API='https://www.fruityvice.com/api/fruit/all';
    //         const response=await fetch(proxyServer+API);
    //         const fruits=await response.json();
    //         console.log(fruits);
    //     }
    //     fetchData();
    // },[])

    function handleSearch(value:string){
        if(value.trim()===''){
            return setFilterFruit([]);
        }
        const fruitArr=fruits.filter((fruit)=>fruit.toLowerCase().includes(value.toLowerCase()));
        setFilterFruit(fruitArr);
    }

    function debounce(callback:()=>void, timer:number){
        clearTimeout(timerRef.current)
        timerRef.current=setTimeout(()=>{
            callback()
        },timer)
    }

  return (
    <div>
        <div>
            <input type="text"
                className="border"
                placeholder="enter fruit name"
                value={input}
                onChange={(e)=>{
                    setInput(e.target.value)
                    debounce(()=>handleSearch(e.target.value),500)
                }}
            />
        </div>
        <div>
            {
                filterFruit.length 
                ?
                filterFruit.map((fruit)=>(
                    <p key={fruit}
                        onClick={()=>setInput(fruit)}
                    >
                    {fruit}</p>
                ))
                :
                <p></p>
            }
        </div>
        
    </div>
  )
}
