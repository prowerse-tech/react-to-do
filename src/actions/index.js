export const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: Math.floor(Math.random() * 1000),
            data: data,
            completed: false
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}

export const completeTodo = (id) => {
    return {
        type: "COMPLETE_TODO",
        payload: {
            id
        }
    }
}