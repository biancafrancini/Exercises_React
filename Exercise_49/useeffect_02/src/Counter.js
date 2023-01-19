import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export function Counter({ count = 0 }) {
  const [counter, setCounter] = useState(count);

  useEffect(() => {
    const oneSecondInterval = setInterval(() => {
      setCounter(currentCount => currentCount + 1);
    }, 1000);

    return () => clearInterval(oneSecondInterval);
  }, [counter]);

  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
}