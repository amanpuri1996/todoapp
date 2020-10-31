import React from 'react';
import { Add_TODO, DELETE_TODO, UPDATE_TODO } from './actions';
import { todos } from './states';


export let reducer = (state = todos, action) => {
    let newTodos;
    switch (action.type) {
        case Add_TODO:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;
            break;

        case DELETE_TODO:
            let newToDos = [...state];
            newToDos = newToDos.filter(todo => todo.id != action.payload);
            return newToDos;
            break;

        case UPDATE_TODO:
            newTodos = [...state];
            let index=-1;
            for(let i=0;i<newTodos.length;i++){
                index++;
                if(newTodos[i].id==action.payload.id){
                    break;
                }
            }
            console.log(index);
            if (index != -1) {
            newTodos[index] = action.payload;
            console.log(newTodos);
            return newTodos;
            }
            break;


    }
    return state;
}

