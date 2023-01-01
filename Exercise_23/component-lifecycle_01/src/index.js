import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "./Counter";

const $root = document.querySelector("#root");

const counterCalculator = <Counter initialValue={0} incrementValue={2} intervalTime={1000}/>;

ReactDOM.render(counterCalculator, $root);
