import React from 'react';
import style from "../styles/item.module.css";
import delet from "../img/delete.png"

export default function TodoItem(props) {
    return(
        <div className={style.container}>
            <h1>{props.task}</h1>
            <div className={style.btns}>
            <button onClick={props.delete} className={style.btn}><img src={delet} alt = "delete"/></button>
            </div>
        </div>
    )
}


