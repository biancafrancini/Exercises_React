import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { Welcome } from "./Welcome";
import { ShowGithubUser } from "./ShowGithubUser";

import "./App.css";

export function App() {
  return (
    <div>
      <div className="nav-container">
        <nav>
          <Link to="/"> Homepage </Link>
          <Link to="counter"> Your personal Counter </Link>
          <Link to="users/:username"> Users Profile</Link>
        </nav>
      </div>
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Welcome name="Guys" />} />
          <Route path="counter" element={<ClickCounter />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>
      </div>
    </div>
  );
}
