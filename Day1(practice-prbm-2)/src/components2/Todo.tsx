import { useState } from "react"

type Task={
    task:string,
    id:string,
    completed:'pending'|'completed',
}

export default function Todo(){
    const [input,setInput]=useState('');
    const [tasks,setTask]=useState<Task[]>([]);

    // console.log(tasks);
    

    function handleAddTask(){
        //it is very imp to provide type to new var newTask:Task
        const newTask:Task={
            id:crypto.randomUUID(),
            task:input,
            completed:'pending',
        }
        //it is single task so we need it inside the array
        setTask([newTask,...tasks])//setTask([...newTask])
        setInput('');
    }

    function handleToggleComp(id:string){
        console.log(id);
        let uTask= tasks.map<Task>((task)=>( //uTask:Task[]
            task.id===id
            ?
                {
                    ...task, 
                    completed:task.completed==='pending'?'completed':'pending',
                }
            :
            task
        ))
        console.log(uTask);
        // setTask([...tasks,uTask]) 
        setTask(uTask);   //it is the array so we directly can pass in setTask
    }

    function handleDelet(id:string){
        const upTask=tasks.filter((task)=>task.id!==id);
        setTask(upTask);
    }

    function handleEdit(id:string){
        console.log('edit',id);
        const taskTitle=prompt('edit task');
        const editedTask=tasks.map((task)=>(
            task.id===id?
            {
                ...task,
                task:task.task=taskTitle,
            }
            : task
        ))
        setTask(editedTask);
    }


    return(
        <div className="container">
            <div>
                <input type="text" placeholder="add task ..."
                    onChange={(e)=>setInput(e.currentTarget.value)}
                    value={input}
                />
                <button onClick={handleAddTask}>
                    AddTask
                </button>
            </div>
            <div>
                {
                    tasks.map((task)=>(
                        <div key={task.id} className="display-task">
                            <span
                                onClick={()=>handleToggleComp(task.id)}
                            >{task.task}</span>

                            <span style={{color:task.completed==='pending'?'orange':'green'}}
                            className={task.completed==='pending'?'pending':'completed'}
                            >{task.completed}</span>

                            <button onClick={()=>handleEdit(task.id)}>edit</button>
                            <button onClick={()=>handleDelet(task.id)}>delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}