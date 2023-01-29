import React from "react";

export function Sum(props) {
  const { numbers = [1, 2, 3] } = props;

  return <h1>Total: {numbers.reduce((prev, curr) => prev + curr)} 🫣</h1>;
}
/*
or we can set default props in this other way below:
export function Sum(props) {

return <h1>Total: {props.numbers.reduce((prev, curr) => prev + curr)} 🫣</h1>;
}

Sum.defaultProps ={
  numbers : [1, 2, 3],
}
*/
