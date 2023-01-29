import React from "react";
import ReactDOM from "react-dom/client";
import { GitHubUser } from "./GitHubUser";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<GitHubUser username="Bianca"/>);