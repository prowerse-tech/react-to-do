import React , { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from "../actions/index";

const Form = () => {

    const dispatch = useDispatch();
    const [inputData, setInputData] = useState('');

    return (
        <div>
            <input type="text" placeholder="Please enter a to-do Item" className="task-input" value={inputData}
             required
             onChange = {(event) => setInputData(event.target.value)} />
            <button className="button-add" onClick={() => dispatch(addTodo(inputData), setInputData(''))} >Add</button>
            <button className="add-icon" onClick={() => dispatch(addTodo(inputData), setInputData(''))}>
                <i className="fa fa-plus-circle"></i>
            </button>
        </div>
    )
}

export default Form