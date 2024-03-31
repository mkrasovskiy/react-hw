import TextField from '@mui/material/TextField';
import { useState } from 'react';
import BasicButtons from './BasicButton';

export default function TodoLis() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task !== "") {
            setTasks([...tasks, task]);
            setTask("");
        }
    };
    
    return (
        <>
            <p>Управление задачами</p>
            <div className='todo-list-wrp'>
                <TextField type="text" placeholder="Задача" value={task} onChange={(e) => setTask(e.target.value)} />
                <BasicButtons onClick={addTask}/>
            </div>
            <ol className='todo-list'>
                    {tasks.length > 0 && tasks.map((task) => (
                        <li key={task}>{task}</li>
                    ))}
            </ol>
        </>
    );
}


    

  
