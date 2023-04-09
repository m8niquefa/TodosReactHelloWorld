import React from 'react';
import './todoSearch.css';
import { Todo } from './App';

interface TodoSearchProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  todos: Todo[];
  setTodos: (value: Todo[]) => void;
}

const TodoSearch: React.FC<TodoSearchProps> = ({ searchValue, setSearchValue, setTodos, todos }) => {
  const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setTodos(todos);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="...Search"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};

export { TodoSearch };
