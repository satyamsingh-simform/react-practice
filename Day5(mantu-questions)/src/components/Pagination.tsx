
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

import { usePagination } from "../hooks/usePagination"

const data=[1,2,3,4,5,6,7,8,9];

export const Pagination = () => {
    const {currentPage,next,previous}=usePagination({data,pageSize:3});
    console.log(currentPage);
    
  return (
    <div>
        <h1>
            {
                currentPage.map((data)=>(
                    <p key={data}>
                        {data}
                    </p>
                ))
            }
        </h1>
        <button onClick={next}>prev</button>
        <button onClick={previous}>next</button>
    </div>
  )
}
