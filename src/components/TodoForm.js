import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from "../styles/form.module.css";
import Add from "../img/add.png";

function TodoForm(props) {
    const [task, setTask] = useState("");
    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {...task, id : uuidv4(), completed : false};
        props.add(newTask);
        setTask("");
    }
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <input type = "text" name = "task" value={task} id = "task" onChange={handleChange} placeholder="Add task here."/>
            <button><img src={Add} alt = "add img" /></button>
        </form>
    )
}


export default TodoForm;