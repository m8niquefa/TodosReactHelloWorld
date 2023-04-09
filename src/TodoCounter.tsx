import React from 'react';
import './todoCounter.css';

interface TodoCounterProps {
  total: number;
  completed: number;
}

const TodoCounter: React.FC<TodoCounterProps> = ({ total, completed }) => {
  return (
    <h2 className = "TodoCounter">You have completed {completed} out of {total} todos</h2>
  );
}

export { TodoCounter };