import React from 'react';
import './createTodoButton.css'
const CreateTodoButton: React.FC = () => {
  const handleClick = () => {
    alert('Click on CreateTodoButton')
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => handleClick()}
    >
      +
    </button>
  );
};

export { CreateTodoButton };
