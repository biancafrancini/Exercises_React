import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import './index.css';

const $root = document.querySelector("#root");

const helloYou = <App />;

ReactDOM.render(helloYou, $root);
