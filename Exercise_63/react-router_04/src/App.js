import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { Welcome } from "./Welcome";
import { FirstPage } from "./FirstPage";
import { ShowGithubUser } from "./ShowGithubUser";

import "./App.css";

export function App() {
  return (
    <div>
      <div className="nav-container">
        <nav>
          <Link to="/:username"> Homepage </Link>
          <Link to="/counter/:username"> Your personal Counter </Link>
          <Link to="users/:username"> Users Profile</Link>
        </nav>
      </div>
      <div className="routes-container">
        <Routes>
        <Route path="/" element={<FirstPage />}/>
        <Route path="/:username" element={<Welcome />} />
        <Route path="/counter/:username" element={<ClickCounter />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
        </Routes>
      </div>
    </div>
  );
}
