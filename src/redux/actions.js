
export const Add_TODO = "Add_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export function addToDo(todo) {
    return {
        type: Add_TODO,
        payload: todo,
    }
}
export function deleteTodo(todoId) {
    return {
        type: DELETE_TODO,
        payload: todoId,
    }
}
export function updateTodo(todo) {
    return {
        type: UPDATE_TODO,
        payload: todo,
    }
}

