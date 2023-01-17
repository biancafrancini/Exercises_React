import React from "react";
import ReactDOM from "react-dom/client";
import { ClickCounter } from "./ClickCounter";


const clickingCounter = <ClickCounter />

const $root = ReactDOM.createRoot(document.querySelector("#root"));
$root.render(clickingCounter);
