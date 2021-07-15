import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from "../styles/form.module.css";
import Add from "../img/add.png";

export default function TodoForm(props) {
    const [task, setTask] = useState(null);
    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {task, id : uuidv4()};
        props.add(newTask);
        setTask("");
    }
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <input className={style.ipt} type = "text" name = "task" value={task} id = "task" onChange={handleChange} placeholder="Add task here..."/>
            <button className={style.btn}><img src={Add} alt = "add img" /></button>
        </form>
    )
}

