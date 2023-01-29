import React from 'react';
import ReactDOM from "react-dom/client";
import {GithubUserList} from "./GithubUserList" ;

const root= ReactDOM.createRoot(document.querySelector("#root"));
root.render(<GithubUserList userList={["Clara", "George"]}/>)