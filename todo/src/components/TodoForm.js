import React from 'react';

let TodoForm = props => {
    return(
        <div>
            <form>
            <form>
                <div className='input-container'>
                    <label htmlFor='newTodos'>New Todo: </label>
                    <input id='newTodos' type='text' name='newTodos'/>
                </div>

                <div className='btn-container'>
                    <button className='btn btn-add'>ADD Todo</button>
                    <button className='btn btn-clear'>Clear Completed</button>
                </div>
            </form>
            </form>
        </div>
    )
}

export default TodoForm;    