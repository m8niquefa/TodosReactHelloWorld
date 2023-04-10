import React from 'react';
import './App.css';
import { AppUI } from './AppUI';

export interface Todo {
  text: string;
  completed: boolean;
}

// const defaultTodos: Todo[] = [
//   { text: 'Learn React', completed: true },
//   { text: 'Learn Firebase', completed: false },
//   { text: 'Learn GraphQL', completed: false },
//   { text: 'Learn Typescript', completed: false },
//   { text: 'Learn Karate', completed: true },
// ];

function useLocalStorage<T>(itemName: string, initialValue: T[]) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  let [items, setItems] = React.useState<T[]>(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(itemName);
      let retrievedItems: T[] = [];

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
      } else {
        retrievedItems = JSON.parse(localStorageItem);
      }
      setItems(retrievedItems);
      setLoading(false);
      setError(false);
    }, 1000);
  }, [initialValue]);

  const localStorageItem = localStorage.getItem(itemName);
  let retrievedItems: T[] = [];

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
  } else {
    retrievedItems = JSON.parse(localStorageItem);
  }
  [items, setItems] = React.useState<T[]>(retrievedItems);


  const save = (newItems: T[]):void => {
    const stringifiedTodos = JSON.stringify(newItems);
    localStorage.setItem(itemName, stringifiedTodos);
    setItems(newItems);
  };

  return {
    items,
    save,
    loading,
    error
  };
}

function App() {

  const {items, save, loading, error} = useLocalStorage<Todo>('TODOS_V1',[]);
  const [searchValue, setSearchValue] = React.useState<string>('');

  const completedTodos = items.filter((item) => !!item.completed).length;
  const totalTodos = items.length;

  let searchedTodos: Todo[] = [];

  if (searchValue.length < 1) {
    searchedTodos = items;
  } else {
    searchedTodos = items.filter((item) => {
      const todoText = item.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text: string):void => {
    console.log("Complete todo: ", text);
    const todoIndex = items.findIndex(item => item.text === text);
    const newTodos = [...items];
    newTodos[todoIndex].completed = true;
    save(newTodos);
  };

  const deleteTodo = (text: string):void => {
    console.log("Delete todo: ", text);
    const todoIndex = items.findIndex(item => item.text === text);
    const newTodos = [...items];
    newTodos.splice(todoIndex, 1);
    save(newTodos);
  };
  console.log('Render (before useEffect)');
  React.useEffect(() => {
    console.log("Inside UseEffect");
  }, [items]);
  console.log('Render (after useEffect)');

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      setTodos={save}
      error={error}
      loading={loading}
    />
  );
}

export default App;
