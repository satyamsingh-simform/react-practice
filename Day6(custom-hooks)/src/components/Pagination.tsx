import { usePagination } from "../hooks/self-hook/usePagination"

// const data=[1,2,3,4,5,6,7,8,9];
const data = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Grapes",
  "Papaya",
  "Pineapple",
  "Watermelon",
  "Guava",
];

export const Pagination = () => {
    const {paginatedData,currentPage,totalPages,canGoNext,canGoPrevious,next,previous,setPageSize}=usePagination({data,pagesize:3});
    return (
    <div>
        {paginatedData.map((val)=>(
            <p key={val} className="border w-60">
            {val}
            </p>
        ))}
        <br /><br />
        <p>totalPages:{totalPages}</p>
        <p>currentPage:{currentPage}</p>
        <p>canGoNext:{canGoNext?"yes":'no'}</p>
        <p>canGoPrevious:{canGoPrevious?"yes":'no'}</p>
        <button onClick={next}>next</button><br />
        <button onClick={previous}>previous</button><br />
        <button onClick={()=>setPageSize(4)}>setPageSize</button>  
    </div>
  )
}


// const {
//   currentPage,
//   totalPages,
//   paginatedData,
//   canGoNext,
//   canGoPrevious,
//   next,
//   previous,
//   goToPage,
//   setPageSize,
//   pageSize,
// } = usePagination({ data, pageSize: 10 });