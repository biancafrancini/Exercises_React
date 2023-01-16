import React from "react";

export function Sum(props) {
  const { numbers = [1, 2, 3] } = props;

  const getNumbersSum = (array) => {
    return array.reduce((prev, curr) => prev + curr);
  };

  return <h1>Total: {getNumbersSum(numbers)} 🫣</h1>;
}

/* 
or we can set default props in this other way below:

export function Sum(props) {

  const getNumbersSum = (array) => {
    return array.reduce((prev, curr) => prev + curr);
  };

  return <h1>Total: {getNumbersSum(props.numbers)} 🫣</h1>;
}

Sum.defaultProps ={
  numbers : [1, 2, 3],
}
*/
