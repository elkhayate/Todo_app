import React,{useState} from 'react'
import style from "../styles/todoapp.module.css";
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const addTask = (task) => {
        setTasks([...tasks, task])
    }
    return(
        <div className={style.container}>
            <h1 className={style.title}>Add your Taks here.</h1>
            {tasks.map((t) => <TodoItem task = {t.task} />)}
           <TodoForm add={addTask} />
        </div>
    )
}

export default TodoApp; 