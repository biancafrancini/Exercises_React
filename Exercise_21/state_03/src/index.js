import React from "react";
import ReactDOM from "react-dom/client";
import { Counter } from "./Counter";

const counterCalculator = (
  <Counter initialValue={0} incrementValue={2} intervalTime={1000} />
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(counterCalculator);
