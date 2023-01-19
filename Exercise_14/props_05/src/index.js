import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

const $root = document.querySelector("#root");

const helloYou = <App age={30}/>;

ReactDOM.render(helloYou, $root);
