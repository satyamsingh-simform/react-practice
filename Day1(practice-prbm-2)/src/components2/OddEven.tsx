type OddEvenProps={
    numbers:number[]
}

/*
export const OddEven = ({numbers}:OddEvenProps) => {
    console.log(numbers);
    
  return (
    <div>
        {
            numbers.map((num,index)=>{
                return(
                    <div key={`${num}-${index}`}>
                        {num<=3?null:<span>{num}---{num%2==0?'EVEN':'ODD'}</span>                        }
                    </div>
                )
            })
        }
    </div>
  )
}
*/

export const OddEven = ({numbers}:OddEvenProps) => {
    console.log(numbers);
    
  return (
    <div>
        {
            numbers.map((num,index)=>{
                if(num<=3){
                    return;
                }
                return(
                    <div key={`${num}-${index}`}>
                        {num}--{num%2===0?'EVEN':'ODD'}
                    </div>
                )
            })
        }
    </div>
  )
}
