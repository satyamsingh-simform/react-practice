import { useAppSelector } from "../hooks/useStoreType"

export const Cart = () => {
    const {items}=useAppSelector(store=>store.cart);
    console.log("--->",items);
    
    const totalprice=items.reduce((acc,curr)=>{
        return acc=acc+curr.price*curr.quantity;
    },0)

  return (
    <>
    <div className="border p-10">
        {
            items.map((itemObj)=>(
                <div key={itemObj.id} className="border m-3">
                    <div>{itemObj.name}</div>
                    <div>{itemObj.price}</div>
                    <div>quantity:{itemObj.quantity}</div>
                </div>
            ))
        }
        <div>Total:{totalprice}</div>

    </div>
    {items.length===0?
        <div className="border p-5">nothing to show in cart</div>
        :''
    }
    </>
  )
}
