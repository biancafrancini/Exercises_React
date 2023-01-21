import React from "react";
import ReactDOM from "react-dom/client";
import { GitHubUser } from "./GitHubUser";

const fetchComponent = <GitHubUser username="Alex"/>

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(fetchComponent);