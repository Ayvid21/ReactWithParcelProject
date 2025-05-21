import React, { useState } from 'react';

export function App(props) {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  const handleTask = e => {
    setTask(e.target.value);
  };
  const handleSubmit = () => {
    if (task.trim() !== '') {
      setList(prev => [...prev, task]);
      setTask('');
    }
  };
  const handleAscIncrement = () => {
    setList(prev => [...prev].sort());
  };

  const handleDecIncrement = () => {
    setList(prev => [...prev].sort().reverse());
  };
  return (
    <div className='App'>
      <div>Todo lsit</div>
      <input type='text' value={task} onChange={handleTask}></input>
      <button onClick={handleSubmit}>Add</button>
      <button onClick={handleAscIncrement}>SortInAsc</button>
      <button onClick={handleDecIncrement}>SortInDec</button>
      <div>
        {list.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </div>
    </div>
  );
}

// Log to console
console.log('Hello console');
