import { useEffect, useState } from 'react';

const useLocalStorage = (key, value = '') => {
  const [storageValue, setStorageValue] = useState(() => {
    const storageCurrentValue = localStorage.getItem(key)
  
    if (Boolean(storageCurrentValue)) {
      return JSON.parse(storageCurrentValue)
    }
    
    return value
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storageValue))
  }, [key, storageValue])

  return [storageValue, setStorageValue];
}

export default useLocalStorage;
