import React from "react";
import { useState } from "react";

export function ClickCounter({ count = 0 }) {
  const [counter, setCounter] = useState(count);

  function handlerIncrementOnClick() {
    setCounter((current) => current + 1);
  }

  /* **************************************************************************** 
  Extra: Adding a button to reduce the counter. 
  If the count is going to be negative, the count will remain at 0.*/

  function handlerReductionOnClick() {
    if (counter !== 0) {
      setCounter((current) => current - 1);
    } else {
      setCounter((current) => current);
    }
  }
  /* **************************************************************************** */

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handlerIncrementOnClick}> ⇡ Increment counter ⇡ </button>
      <br />
      <br />
      <button onClick={handlerReductionOnClick}> ⇣ Reduce counter ⇣ </button>
    </div>
  );
}
