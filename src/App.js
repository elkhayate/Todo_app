import React from 'react';
import style from "./app.module.css";
import todo from "./img/todo.svg";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import TodoApp from "./components/TodoApp";
function App() {
  return (
    
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route  path="/Todo" component={TodoApp}/>
      </Switch>
    </Router>
    
  );
}

export default App;

function Landing() {
  return(
    <>
    <div className={style.container}>
      <div className={style.title}>
        <h1>Todo App</h1>
      </div>
          <div className={style.data}>
              <div className={style.svg}> 
                <img className={style.todo} src={todo} alt="todo svg" />
              </div>
          </div>
          <button className={style.btn}><Link to="/Todo" style={{textDecoration: 'none', color : "white"}}>Get Started</Link></button>
    </div>
    </>
  )
}
