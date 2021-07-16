import React,{useState} from 'react'
import style from "../styles/todoapp.module.css";
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const addTask = (task) => {
        setTasks([...tasks, task])
    }
    const handleDelete = (id) => {
        setTasks(tasks.filter(t => t.id !== id))
    }
    return(
        <div className={style.container}>
            <h1 className={style.title}>Todo App</h1>
            {tasks.map((t) => <TodoItem delete = {() => handleDelete(t.id)} task = {t.task} />)}
           <TodoForm add={addTask} />
        </div>
    )
}

export default TodoApp; 