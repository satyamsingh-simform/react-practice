import { useState } from "react"

const cartData={
    name: "Phone",
    quantity: 0,
}

export const Cart = () => {
    const [cartDataObj,setCartData]=useState(cartData);

    function handleQuantity(){
        setCartData((prevObj)=>(
            {
                ...prevObj,
                quantity:prevObj.quantity+1,
            }
        ))
    }

  return (
    <div className="h-screen flex justify-center items-center">
        {
            cartDataObj.quantity===0
            ?
            (
                <button className="border px-5"
                    onClick={handleQuantity}
                >
                    ADD
                </button>
            )
            :
            (<div className="border px-5 flex gap-5">
                <button>-</button>{cartDataObj.quantity}<button>+</button>
            </div>
                
            )
        }
        
    </div>
  )
}
