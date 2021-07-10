import React from 'react';
import style from "./app.module.css";
import todo from "./img/todo.svg";


function App() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Todo App w/ Hooks.</h1>
      </div>
          <div className={style.data}>
              <div className={style.svg}> 
                <img src={todo} alt="todo svg" />
              </div>
          </div>
          <button className={style.btn}>Get Started</button>
    </div>
  );
}

export default App;
