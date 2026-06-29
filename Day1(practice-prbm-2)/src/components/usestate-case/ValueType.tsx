import { useState } from "react";

const obj={
    count:0
}

export const ValueType = () => {
    const [countObj,setCountObj]=useState(obj);
    console.log('hi-->');

    function handleCount(){
        setCountObj({
            ...countObj,
            count:++countObj.count,
        })
    }

    return (
      <div>
        <h1>COUNT:{countObj.count}</h1>
        <button className="border px-5"
          onClick={handleCount}
        >
          Increment:{countObj.count}
        </button>
        <h2>og:{obj.count}</h2>
      </div>
    );
};

/*
export const ValueType = () => {
 const [count, setCount] = useState(0);

    return (
      <div>
        <h1>COUNT:{count}</h1>
        <button className="border px-5"
          onClick={() => {setCount((count) => count + 1)}}
        >
          Increment:{count}
        </button>
      </div>
    );
};

*/
