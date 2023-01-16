import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import './index.css';


const helloYou = <App />;

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(helloYou);
