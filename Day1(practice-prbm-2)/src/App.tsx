
// import { Progress } from "./components/progress-bar/Progress";
// import { Counter } from "./components/Counter";
// import { Cart } from "./components/destructuring/Cart";
// import { PriceMutate } from "./components/destructuring/PriceMutate";
// import { ProfileCard } from "./components/destructuring/ProfileCard";
// import { OneTimePass } from "./components/otp/OneTimePass";
// import { Reducer } from "./components/usestate-case/Reducer";
// import { ValueType } from "./components/usestate-case/ValueType";
// import { CustomHook, UseCustomHook } from "./CustomHook";
// import { Display } from "./components/toggleSelection/Display";
// import Accordian from "./components/accordian/Accordian";
// import AccordianOne from "./components/accordian-one/AccordianOne";
// import Search from "./components/search-functionality/Search";
// import BarGraph from "./components/bar-char-creator/BarGraph";

import { Reducer } from "./components/usestate-case/Reducer";
import AsyncState from "./output-based/AsyncState";
import { Child } from "./output-based/context/Child";
import { Parent } from "./output-based/context/Parent";
import Ref from "./output-based/Ref";
import { Timer } from "./output-based/Timer";

// import { AutoComplete } from "./components/auto-complete/AutoComplete";
// import { Hook } from "./components/Hook";
// import { OneTimePassGen } from "./components/otp/OneTimePassGen";
// import Search from "./components/search-functionality/Search";
// import { ArrayGen } from "./generic/ArrayGen";
// import { DataTableG } from "./generic/DataTableG";

export interface UserDetailsTable {
  id: string;
  name: string;
  age: number;
  salary: number;
}

 
// columnsOrder has to be from the interface that is mentioned. 
 

export default function App(){

    return(
        <>
        {/* <Accordian/> */}
        {/* <AccordianOne/> */}
        {/* <Search/> */}
        {/* <BarGraph/> */}
        {/* <Display/> */}
        {/* <Progress/> */}
        {/* <ValueType/> */}
        {/* <Reducer/> */}
        {/* <OneTimePass/> */}
        {/* <ProfileCard/> */}
        {/* <PriceMutate/> */}
        {/* <Cart/> */}
        {/* <Counter/> */}


        {/* <DataTableG<UserDetailsTable> 
            presentableColumns={['id', 'name', 'salary']}
            data={[{ id:'1', name:'Mark', age: 21, salary: 35000 }]} 
        /> */}
        {/* <ArrayGen<number> arr={[1,2,3]}/>
        <ArrayGen arr={["a", "b"]}/> */}
        {/* <Hook/> */}
        {/* <OneTimePassGen/> */}
        {/* <AutoComplete/> */}


        {/* <Timer/> */}
        {/* <AsyncState/> */}

        {/* <Child/> */}
        {/* <Parent/> */}
        {/* <Ref/> */}
        {/* <Reducer/> */}
        </>
    )
}

