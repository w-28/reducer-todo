import React, { useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { todoReducer, initialState } from './reducers/todoReducer';

function App() {
  let [ newEntry, setNewEntry ] = useState('');
  let [ state, dispatch ] = useReducer(todoReducer, initialState)
  // console.log(state, 'inside app state')
  let handleChanges = e => {
    setNewEntry(e.target.value)
  }

  let addTodo = todoFromInput => {
    let newTodo = {
      id: Date.now(),
      todo: todoFromInput,
      completed: false
  }
    dispatch({ type: 'ADD_TODO', payload:newTodo})
  }

  let handleSubmit = event => {
    event.preventDefault();
    addTodo(newEntry);
    setNewEntry('')
  }

  let toggleComplete = ClickedID => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: ClickedID })
  };

  let clearCompleted = e => {
    e.preventDefault()
    dispatch({ type: 'CLEAR_TODOS' })
  };
  

  return (
    <div className="App">
      <TodoForm 
      addTodo={addTodo}
      newEntry={newEntry}
      handleChanges={handleChanges}
      handleSubmit={handleSubmit}
      clearCompleted={clearCompleted}
      />
      <TodoList
      toggleComplete={toggleComplete}
      state={state}
      />
    </div>
  );
}

export default App;
