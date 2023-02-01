import { useState } from "react";
import { Link } from "react-router-dom";

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
      <div>
        <h1>{counter}</h1>
        <button onClick={handlerIncrementOnClick}> ⇡ Increment counter ⇡ </button>
        <br />
        <br />
        <button onClick={handlerReductionOnClick}> ⇣ Reduce counter ⇣ </button>
      </div>
      <br />
      <br />
      <div>
      <Link to={`/`}> Go back to Homepage</Link>
      </div>
    </div>
  );
}
