
import React, { useState } from "react";
import './../styles/App.css';

import Child from "./Child";

const App = () => {

  function handleComplete(index){
    const filteredTodo = todos.map((todoItem, key)=>{
      if(key == index){
        todoItem.status= true;
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
        <Child todos={todos} handleComplete = {handleComplete} />
    </div>
  )
}

export default App;
