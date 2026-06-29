type GraphDataType={
    id:string,
    label:string,
    value:number,
}

export default function BarGraph(){
    const GraphData:GraphDataType[]=[
        {id:'1',label:'JS',value:60},
        {id:'2',label:'TS',value:80},
        {id:'3',label:'CSS',value:50},
        {id:'4',label:'React',value:90},
        {id:'5',label:'HTML',value:80}
    ]
    console.log(GraphData);
    const maxVal=Math.max(...GraphData.map((obj)=>obj.value));
    const gap=(maxVal/10);
    console.log('gap:',gap);
    
    const interval=Array.from({length:11},(_,index)=>index===10?maxVal:(index*gap).toFixed(1)).reverse();
    console.log(interval);
    
    return(
        <>
        <div className="axis">
            <div className="y-axis-value">
                {
                    interval.map((value)=>(
                        <div key={value}>
                            {value}
                        </div>
                    ))
                }
            </div>
            {
                GraphData.map((obj,index)=>(
                    <div key={index} className="value-label">
                        <div style={{height:`${obj.value/maxVal*100}%`}} className="value">{obj.value}</div>
                        <div className="label">{obj.label}</div>
                    </div>
                ))
            }
        </div>
        </>
    )
}