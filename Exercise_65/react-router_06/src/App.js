import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { Welcome } from "./Welcome";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubList } from "./GithubList";
import { GitHubUser } from "./GitHubUser";

import "./App.css";



export function App() {
  return (
    <div>
      <div className="nav-container">
        <nav>
          <Link to="/"> Homepage </Link>
          <Link to="counter"> Your personal Counter </Link>
          <Link to="users"> Users Profile</Link>
        </nav>
      </div>
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Welcome name="Guys" />} />
          <Route path="counter" element={<ClickCounter />} />
          <Route path="users" element={<GithubList />}>
            <Route path="newUser/:username" element={<ShowGithubUser />} />
            <Route path="newUser" element={<GitHubUser />}/>
          </Route>
          <Route path="*" element={<div><h3>Page not found. Sorry! 😞</h3>
              <Link to="/"> Go back to Homepage </Link></div>}
          />
        </Routes>
      </div>
    </div>
  );
}
