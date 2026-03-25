import React, { useState } from 'react';
import './ToDo.css';

const initialTasks = [
  { id: 1, text: 'Meeting with CEO', completed: false, starred: false },
  { id: 2, text: 'Pick up kids from school', completed: false, starred: true },
  { id: 3, text: 'Meeting with Marketing Team', completed: true, starred: false },
  { id: 4, text: 'Read a book', completed: false, starred: false, active: true },
  { id: 5, text: 'Buy some groceries', completed: false, starred: true },
  { id: 6, text: 'Organize office', completed: true, starred: false },
];

const ToDo = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed, active: false } : t));
  };

  const setAsActive = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, active: true } : { ...t, active: false }));
  };

  const toggleStar = (e, id) => {
    e.stopPropagation();
    setTasks(tasks.map(t => t.id === id ? { ...t, starred: !t.starred } : t));
  };

  return (
    <div className="todo-page">
      <div className="todo-header-row">
        <h2 className="page-title">To-Do List</h2>
        <button className="add-new-btn">Add New +</button>
      </div>

      <div className="todo-container">
        {tasks.map(task => (
          <div 
            key={task.id} 
            className={`todo-item ${task.active ? 'active' : ''} ${task.completed ? 'completed' : ''}`}
            onClick={() => setAsActive(task.id)}
          >
            <div className="todo-left">
              <div 
                className={`todo-radio ${task.completed ? 'checked' : ''}`}
                onClick={(e) => { e.stopPropagation(); toggleComplete(task.id); }}
              >
                {task.completed && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
              </div>
              <span className="todo-text">{task.text}</span>
            </div>
            <div className="todo-right">
              <button className={`todo-icon-btn ${task.starred ? 'starred' : ''}`} onClick={(e) => toggleStar(e, task.id)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill={task.starred ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </button>
              <button className="todo-icon-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
