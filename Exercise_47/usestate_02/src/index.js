import React from "react";
import ReactDom from "react-dom/client";
import { Login } from "./Login";

const welcomeMessage = <Login />;
const $root = ReactDom.createRoot(document.querySelector("#root"));
$root.render(welcomeMessage);
