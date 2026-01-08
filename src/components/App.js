import React, { useState } from "react";
import './../styles/App.css';

import TodoList from "./TodoList";

const App = () => {

  function handleComplete(index){
    const filteredTodo = todos.map((todoItem, key)=>{
      if(key == index){
        todoItem.status='completed';
      }
      return todoItem
    })
    setTodos(filteredTodo)
  }

  const [todos, setTodos] = useState([
    {'content':'eat','status':false},
    {'content':'walk','status':false},
    {'content':'drink','status':false}
  ])
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <TodoList todos={todos} handleComplete = {handleComplete} />
    </div>
  )
}

export default App;
