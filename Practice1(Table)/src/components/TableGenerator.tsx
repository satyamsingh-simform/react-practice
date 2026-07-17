import { useState } from "react";

const grid = Array.from({ length: 10 }, (_, __) => Array.from({ length: 10 }));
console.log('-->',grid);

export const TableGenerator = () => {
    const [row,setRow]=useState<number>(0);
    const [col,setCol]=useState<number>(0);
    const [tableRow,setTableRow]=useState(0);
    const [tableCol,setTableCol]=useState(0);

    console.log(tableRow);
    console.log(tableCol);
    

  return (
    <div >
        {
            grid.map((arr,rowIndex)=>(
                <div key={rowIndex} className="flex">
                    {
                        arr.map((_,colIndex)=>{
                            const isSelected=rowIndex<=row && colIndex<=col; 
                            console.log(isSelected);
                            
                            return (
                            <div key={colIndex} 
                                className={`border h-10 w-10 ${isSelected?'bg-green-200':''}`}
                                onMouseEnter={()=>{
                                    setRow(rowIndex)
                                    setCol(colIndex)
                                }}

                                onClick={()=>{
                                    setTableRow(row+1);
                                    setTableCol(col+1);
                                }}
                            >
                            </div>)
                        }
                        )
                    }
                </div>
            ))
        }

        <p className="mt-2">
            {row+1} x {col+1} Table
        </p>

        {
            tableRow ? (
                <div>
                    {
                        Array.from({length:tableRow}).map((_,index)=>(
                            <div key={index}>
                                {
                                    Array.from({length:tableCol}).map((_,index)=>(
                                        <input key={index} type="text" 
                                            className="h-10 w-10 border"
                                        />
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            )
            :null
        }

    </div>
  )
}
