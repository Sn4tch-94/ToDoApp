import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState(["Take dogs for a walk", "Take the rubbish out"]);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault()
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="App">
      <h1>Hello World !</h1>
      <form>
        <FormControl>
          <InputLabel>✅ Write a todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
        {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
      </form>

      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
