import React from 'react'
import { useSelector } from 'react-redux';
import ToDoItem from './ToDoItem';


const ToDoList = (props) => {
    let todos = useSelector(state => state)
    return (
        <div className="m-3" >
            {todos.map(todo => {
                return <ToDoItem
                    key={todo.id}
                    todo={todo}
                />
            })}
        </div>
    )
}

export default ToDoList
