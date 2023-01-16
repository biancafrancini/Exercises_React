import React from "react";

export function Sum(props) {
  const getNumbersSum = (array) => {
    return array.reduce((prev, curr) => prev + curr);
  };

  return <h1>Total: {getNumbersSum(props.numbers)} 🫣</h1>;
}
