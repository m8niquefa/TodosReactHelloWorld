import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { Todo } from './App';

interface AppProps {
  totalTodos: number;
  completedTodos: number;
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  searchedTodos: Todo[];
  completeTodo: (text: string) => void;
  deleteTodo: (text: string) => void;
  setTodos: (todos: Todo[]) => void;
  loading: boolean;
  error: boolean;
}

export function AppUI(props: AppProps) {

  return (
    <React.Fragment>
      <TodoCounter total={props.totalTodos} completed={props.completedTodos} />
      <TodoSearch searchValue={props.searchValue} setSearchValue={props.setSearchValue} setTodos={() => props.setTodos} todos={props.searchedTodos}/>
      <TodoList >
        {props.error && <p>There was an error</p>}
        {props.loading && <p>Loading...</p>}
        {(!props.loading && !props.searchedTodos.length) && <p>Create your first TODO</p>}
        {
          props.searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => props.completeTodo(todo.text)}
              onDelete={() => props.deleteTodo(todo.text)}
            />
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}