import React from 'react'

const ToDo = ({todo,handleToggle}) => {

    const handleClick=(e)=>{
        e.preventDefault();
        handleToggle(e.currentTarget.id)

    }
    return (
        <div id={todo.id} key={todo.id +todo.task} className={todo.complete?"strike":"todo"} onClick={handleClick} value={todo.id}>
           {todo.task}
        </div>
    )
}

export default ToDo;
