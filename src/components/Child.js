import React from "react"

function Child(props){
    const {todos, handleComplete} =props;
    const renderTodos = todos.map((todo,index)=>{
        return todo.status?<li key={index}>{todo.content}</li>: 
        <li key={index}>{todo.content}<button onClick={handleComplete(index)}>Complete</button></li>
    })
    return renderTodos;
}

export default Child;