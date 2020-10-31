import React from 'react'
import { useSelector } from 'react-redux';
import ToDoItem from './ToDoItem';


const ToDoList = (props) => {
    let todos = useSelector(state => state)
    console.log(todos.length);
    return (
        <div className="m-3" >
            {todos.map(todo => {
                return <ToDoItem
                    key={todo.id}
                    todo={todo}
                    todos={todos}
                />
            })}
        </div>
    )
}

export default ToDoList
