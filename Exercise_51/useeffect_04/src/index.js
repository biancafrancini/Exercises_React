import React from 'react';
import ReactDOM from "react-dom/client";
import {GithubList} from "./GithubList" ;

const gitHubListComponent = <GithubList userList={["Clara", "George"]}/>

const root= ReactDOM.createRoot(document.querySelector("#root"));
root.render(gitHubListComponent)