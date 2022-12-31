import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "./Counter";

const $root = document.querySelector("#root");

const counterCalculator = <Counter />;

ReactDOM.render(counterCalculator, $root);
