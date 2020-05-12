import React from 'react';
import TodoForm from './TodoForm';

let Todo = props => {
    // console.log(props.todo, 'props from todolist')
    // console.log(props.todo.id, 'asdfasdgasdfa')
    return(
        <div className={`todo ${props.todo.completed ? 'completed' : ''}`} 
        onClick={() => props.toggleComplete(props.todo.id)}>
            <h4>{props.todo.todo}</h4>
        </div>
    )
}

export default Todo;