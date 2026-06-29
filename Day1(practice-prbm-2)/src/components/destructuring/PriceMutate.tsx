import { useState } from "react"

const data={
  name: "Laptop",
  price: 50000,
}

export const PriceMutate = () => {
    const [electronicObj,setElectronicObj]=useState(data);
    console.log('render even nothing changed in obj just reference changed comment line16');

    function increasePriceBy1000(){
        setElectronicObj((prevObj)=>(
            {
                ...prevObj,
                price:prevObj.price+1000
            }
        )
            
        )
    }

  return (
    <div>
        <h1>{electronicObj.name}</h1>
        <h1>{electronicObj.price}</h1>

        <button onClick={increasePriceBy1000}>IncreasePriceBy1000</button>
    </div>
  )
}
