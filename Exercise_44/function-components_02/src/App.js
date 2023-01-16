import React from "react";
import { Sum } from "./Sum";

export function App(){
  const numbersArray = [2, 4, 6, 3];
    return (
      <div>
        <Sum numbers={numbersArray} />
        <h3>⇢ Given numbers: {numbersArray.join(", ")}</h3>
      </div>
    );
  }
