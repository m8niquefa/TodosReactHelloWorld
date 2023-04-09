import React from 'react';
import './todoItem.css';
interface TodoItemProps {
  completed: boolean;
  text: string;
  onDelete: () => void;
  onComplete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {


  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
          X
      </span>
    </li>
  );
};

export { TodoItem };
