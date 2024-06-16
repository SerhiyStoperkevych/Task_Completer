import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [submit, setSubmit] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  }

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>What do you want to add?</h1>
        <p>{tasks.filter(task => task.completed).length} out of {tasks.length} tasks completed</p>
        <input type="text" name="text" value={input} onChange={handleInput} />
        <button type="submit">Add</button>
      </form>
      
      {submit && (
        <div>
          {tasks.map(task => (
            <div key={task.id}>
              <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => toggleComplete(task.id)} 
              />
              <h1 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
