import React from "react";
import ReactDOM from "react-dom/client";
import { UncontrolledLogin } from "./UncontrolledLogin";

const uncontrolledForm = <UncontrolledLogin />;

const $root = ReactDOM.createRoot(document.querySelector("#root"));
$root.render(uncontrolledForm);
