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

  let handleChanges = e => {
    setNewEntry(e.target.value)
  }
  

  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
