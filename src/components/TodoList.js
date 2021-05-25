import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, completeTodo } from '../actions';

const TodoList = () => {

    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch('');
    
    return (
        <div>
            {
                list.map((elem) => (
                    <li className="list-item" key={elem.id}>
                        <input type="text" value={elem.data} className={`list ${elem.completed ? "complete" : ""}`}  />
                        <div className="button-complete" onClick={() => dispatch(completeTodo(elem.id))}>
                            <i className="fa fa-check-circle" ></i>
                        </div>
                        <div className="button-delete" onClick={() => dispatch(deleteTodo(elem.id))}>
                            <i className="fa fa-trash" ></i>
                        </div>
                    </li>
                ))
            }
        </div>
    )
}

export default TodoList
