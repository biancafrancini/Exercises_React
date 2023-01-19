import React from 'react';
import ReactDOM from "react-dom/client";
import {GithubList} from "./GithubList" ;

const gitHubListComponent = <GithubList usernames={["Clara", "Bob"]}/>

const root= ReactDOM.createRoot(document.querySelector("#root"));
root.render(gitHubListComponent)