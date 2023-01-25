import React, { useState } from "react";

function useCounter(count) {
  const [counter, setCounter] = useState(count);

  function handleIncrement() {
    setCounter((current) => current + 1);
  }

  function handleDecrement() {
    if (counter <= 0) {
      setCounter((current) => (current = 0));
    } else {
      setCounter((current) => current - 1);
    }
  }

  function handleReset() {
    setCounter((current) => (current = 0));
  }

  return {
    counter: counter,
    increment: handleIncrement,
    decrement: handleDecrement,
    reset: handleReset,
  };
}

export function CounterComponent({ count = 0 }) {
  const { counter, increment, decrement, reset } = useCounter(count);

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={increment}>⇡ Increment counter ⇡ </button>
      <button onClick={decrement}>⇣ Decrement counter ⇣</button>
      <button onClick={reset}>Reset counter ↩︎</button>
    </div>
  );
}
