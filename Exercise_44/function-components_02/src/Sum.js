import React from "react";

export function Sum(props) {
  return <h1>Total: {props.numbers.reduce((prev, curr) => prev + curr)} 🫣</h1>;
}
