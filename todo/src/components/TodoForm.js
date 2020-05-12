import React from 'react';

let TodoForm = props => {
    let {
        newEntry,
        handleChanges,
        handleSubmit,
        clearCompleted
    } = props
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className='input-container' >
                    <label htmlFor='newTodos'>New Todo: </label>
                    <input id='newTodos' type='text' name='newTodos' onChange={handleChanges}
                    value={newEntry}/>
                </div>

                <div className='btn-container'>
                    <button className='btn btn-add'>ADD Todo</button>
                    <button className='btn btn-clear' onClick={clearCompleted}>Clear Completed</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm;    