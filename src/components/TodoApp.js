import React,{useState} from 'react'
import style from "../styles/todoapp.module.css";
import TodoForm from './TodoForm';

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const addTask = (task) => {
        setTasks([...tasks, task])
    }
    return(
        <div className={style.container}>
           <TodoForm add={addTask} />
           {tasks.map(t => <h1 key={t.id}>{t.task}</h1>)}
        </div>
    )
}

export default TodoApp;