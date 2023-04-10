import React from "react";

export function useLocalStorage<T>(itemName: string, initialValue: T[]) {
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
