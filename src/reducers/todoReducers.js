const initialData = {
    list : [],
    text: ''
}

const todoReducers = (state=initialData, action) => {
    switch(action.type) {
        case "ADD_TODO" :
            const {id, data} = action.payload;
            if(data) {
                return {
                    ...state,
                    list: [
                        ...state.list,
                        {
                            id: id,
                            data: data,
                            completed: false
                        }
                    ]
                }
            }

        case "COMPLETE_TODO": 
            return {
                list: state.list.map((elem) => {
                if (elem.id === action.payload.id) {
                    return {...elem, completed: !elem.completed}
                }
                return elem;
                })
            }

        case  "DELETE_TODO" :
            return {
                ...state,
                list: [...state.list.filter((elem) => elem.id !== action.id)]
            }

        default: return state;
    }
}

export default todoReducers;