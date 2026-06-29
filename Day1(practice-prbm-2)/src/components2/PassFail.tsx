type PassProps={
    marks:number[],
}
export default function PassFail({marks}:PassProps){
    console.log(marks);
    
    return(
        <>
        <h1>hi</h1>
        <div>
            {
                marks.map((mark,index)=>(
                    <div key={`${mark}-${index}`}>
                        {mark} <span>--{mark>35?'PASS':'FAIL'}</span>
                    </div>
                ))
            }
        </div>
        </>
    )
}