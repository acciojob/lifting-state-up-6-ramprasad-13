
import React, { useState } from "react";
import './../styles/App.css';

import Child from "./Child";

const App = () => {

  function handleComplete(index){
    const filteredTodo = todos.filter((todoItem, key)=>{
      return key === index;
    })
    filteredTodo.status =true;
    setTodos(todos, filteredTodo)
  }

  const [todos, setTodos] = useState([
    {'content':'eat','status':'false'},
    {'content':'walk','status':'false'},
    {'content':'drink','status':'false'}
  ])
  return (
    <div>
        {/* Do not remove the main div */}
        <Child todos={todos} handleComplete = {handleComplete} />
    </div>
  )
}

export default App
