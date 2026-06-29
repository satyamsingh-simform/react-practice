import { differenceInDays, getDaysInMonth, getMonth, lastDayOfMonth } from "date-fns"


const dayInMonth=getDaysInMonth(new Date());

console.log(dayInMonth);


const pendingDays= differenceInDays(
    lastDayOfMonth(new Date())
  ,
  new Date()
)

const dayPassed=dayInMonth-pendingDays
    
console.log(lastDayOfMonth(new Date()));



export const MonthDay = () => {
  return (
    <div className="container">
        {
            Array.from({length:dayInMonth}).map((_,index)=>(
                <>
                <p style={{backgroundColor:`${index+1===dayPassed?'green':index+1>dayPassed?'black':'gray'}`}}
                    className="day"
                ></p>
                </>
            ))
        }
    </div>
  )
}
