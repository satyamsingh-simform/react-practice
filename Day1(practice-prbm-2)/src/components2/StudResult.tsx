type StudResult={
    students:{
        name:string,
        marks:number,
    }[]
}

export const StudResult = (props:StudResult) => {
    console.log(props.students);
    const stuInfo=props.students;
  return (
    <div>
        {
            stuInfo.map((info)=>{
                if(info.marks<35) return;

                return(
                    <div key={info.name}>
                        {info.name}--{'PASS'}
                    </div>
                )
            })
        }
    </div>
  )
}
