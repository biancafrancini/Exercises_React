import React from "react";
import ReactDOM from "react-dom/client";
import { Counter } from "./Counter";


const counterCalculator = <Counter />;

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(counterCalculator);
