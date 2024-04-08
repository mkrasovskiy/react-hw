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
    const delButton = indexToRemove => {
        setTasks(tasks.filter(index => index !== indexToRemove));
    };
    const taskList = tasks.map((task, index) =>
            <div key={task}>{index + 1}. {task}
                <button onClick={() => delButton(task)}>Удалить</button>
            </div>
    );
    return (
        <>
            <p>Управление задачами</p>
            <div className='todo-list-wrp'>
                <TextField type="text" placeholder="Задача" value={task} onChange={(e) => setTask(e.target.value)} />
                <BasicButtons onClick={addTask}/>
            </div>
            
            <div>{taskList}</div>
        </>
    );
}


    

  
