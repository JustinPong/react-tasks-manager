import { useState, useEffect } from "react";

function getStorageValue(task, setTask) {
  // getting stored value
  const saved = localStorage.getItem(task);
  const initial = JSON.parse(saved);
  return initial || setTask;
}

export const useLocalStorage = (task, setTask) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(task, setTask);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(task, JSON.stringify(value));
  }, [task, value]);

  return [value, setValue];
};

export default useLocalStorage;