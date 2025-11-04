import { useState } from "react";

export const useCounter = (initialValue = 0) => { 
  const [count, setCount] = useState(initialValue);

  const handleIncrement = (value = 1) => { 
    setCount(currentCount => currentCount + value); 
  };

  const handleDecrement = (value = 1) => { 

    setCount(currentCount => {
        if (currentCount === 0) return currentCount; 
        return currentCount - value;
    });
  };

  const handleReset = () => {
    setCount(initialValue);
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
};

export default useCounter;