import React from 'react';
import Todo from './Todo';

let TodoList = props => {
    let {
        state,
        toggleComplete
    }= props
    // console.log(state, 'from props')
    // console.log(props, 'from props');
    return(
        <>
            <div>TodoList</div>
            <div className='todo-list'>
                {state.map(todo => (
                <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} />
            ))}</div>
        </>
    )
}

export default TodoList;