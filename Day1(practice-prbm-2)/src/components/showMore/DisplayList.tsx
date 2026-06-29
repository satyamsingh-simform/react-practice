import { type ReactNode } from "react";
import useDisplayList from "./useDisplayList";

type DisplayListProps<T>={
    lists:T[],
    Maxcount:number,
}

export default function DisplayList<T>({lists, Maxcount}:DisplayListProps<T>){
    const {expended,handleExpendedToggle,currentList}=useDisplayList(lists, Maxcount);

    return(
        <>
            {/* {
                expended?
                lists.map((list,index)=>(
                    <p key={`${list}-${index}`}>{list}</p>
                ))
                :
                lists.slice(0,Maxcount).map((list,index)=>(
                    <p key={`${list}-${index}`}>{list}</p>
                ))
            } */}
            {
                currentList.map((item)=>(
                    <p key={`${item}`}>
                    {item}
                    </p>
                ))
            }
            <button onClick={handleExpendedToggle}>{expended?`showLess:${Maxcount}`:`showMore:${lists.length-Maxcount}`}</button>
        </>
    )
}