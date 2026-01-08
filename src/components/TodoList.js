import React from "react"

function TodoList(props){
    const {todos, handleComplete} =props;
    const renderTodos = todos.map((todoItem,index)=>{
        return todoItem.status=='completed'?<li key={index}>{todoItem.content}</li>: 
        <li key={index}>{todoItem.content}<button id={index} onClick={(e)=> {handleComplete(e.target.id)}}>Complete</button></li>
    })
    return (
        <>
            <h3>Child Component</h3>
            <ul>{renderTodos}</ul>
        </>
    )
}

export default TodoList;