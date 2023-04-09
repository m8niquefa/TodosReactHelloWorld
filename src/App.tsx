import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import './App.css';

export interface Todo {
  text: string;
  completed: boolean;
}

const defaultTodos: Todo[] = [
  { text: 'Learn React', completed: true },
  { text: 'Learn Firebase', completed: false },
  { text: 'Learn GraphQL', completed: false },
  { text: 'Learn Typescript', completed: false },
  { text: 'Learn Karate', completed: true },
];


function App() {

  const [todos, setTodos] = React.useState<Todo[]>(defaultTodos);
  const [searchValue, setSearchValue] = React.useState<string>('');

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos: Todo[] = [];

  if (searchValue.length < 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }


  const completeTodo = (text: string):void => {
    console.log("Complete todo: ", text);
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };
 
  const deleteTodo = (text: string):void => {
    console.log("Delete todo: ", text);
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} setTodos={() => setTodos} todos={searchedTodos}/>

      <TodoList >
        {
          searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))
        }
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
