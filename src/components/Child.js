import React from "react"

function Child(props){
    const {todos, handleComplete} =props;
    const renderTodos = todos.map((todo,index)=>{
        return todo.status?<li key={index}>{todo.content}</li>: 
        <li key={index}>{todo.content}<button id={index} onClick={(e)=> {handleComplete(e.target.id)}}>Complete</button></li>
    })
    return (
        <>
            <h3>Child Component</h3>
            <ul>{renderTodos}</ul>
        </>
    )
}

export default Child;