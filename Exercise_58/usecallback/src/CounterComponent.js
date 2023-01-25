import React, { useCallback, useState } from "react";

export function CounterComponent({ count = 0 }) {
  const [counter, setCounter] = useState(count);

  const handleIncrement = useCallback(() => {
    setCounter((current) => current + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    if (counter <= 0) {
      setCounter((current) => (current = 0));
    } else {
      setCounter((current) => current - 1);
    }
  }, [counter]);

  const handleReset = useCallback(() => {
    setCounter((current) => (current = count));
  }, [count]);

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={handleIncrement}>⇡ Increment counter ⇡ </button>
      <button onClick={handleDecrement}>⇣ Decrement counter ⇣</button>
      <button onClick={handleReset}>Reset counter ↩︎</button>
    </div>
  );
}
